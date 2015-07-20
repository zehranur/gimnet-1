namespace Gimnet.Duyuru.Duyuru
{
    using jQueryApi;
    using jQueryApi.UI.Widgets;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public class PromptDialog : PropertyDialog<object, PromptDialogOptions>
    {
        public PromptDialog(PromptDialogOptions opt)
            : base(opt)
        {
            if (!string.IsNullOrEmpty(this.options.CssClass))
                this.element.AddClass(this.options.CssClass);

            if (!string.IsNullOrEmpty(this.options.Message))
            {
                J("<div/>").AddClass("message")
                    .InsertBefore(this.ById("PropertyGrid")).Text(options.Message ?? "");
            }
        }

        protected override DialogOptions GetDialogOptions()
        {
            var opt = base.GetDialogOptions();
            opt.Buttons = new DialogButton[] {
                new DialogButton 
                {
                    Text = "Tamam",
                    Click = delegate() 
                    {
                        if (!ValidateForm())
                            return;

                        if (options.ValidateValue == null || options.ValidateValue(Value))
                            DialogClose();
                    }
                },
                new DialogButton
                {
                    Text = "İptal",
                    Click = DialogClose
                }
            }.As<object[]>();
            opt.Title = options.Title ?? "Giriş İstemi";
            return opt;
        }

        protected override void LoadInitialEntity()
        {
            Value = options.Value;
        }

        protected override List<PropertyItem> GetPropertyItems()
        {
            return new List<PropertyItem>
            {
                new PropertyItem
                {
                    Name = "Value",
                    EditorType = options.EditorType ?? "String",
                    Required = options.Required ?? true,
                    EditorParams = options.EditorOptions.As<JsDictionary>()
                }
            };
        }

        public object Value
        {
            get
            {
                return GetSaveEntity().As<dynamic>().Value;
            }
            set
            {
                propertyGrid.Load(new
                {
                    Value = value
                });
            }
        }

        public static void Prompt(string title, string message, string value, Func<string, bool> validateValue)
        {
            new PromptDialog(new PromptDialogOptions
            {
                Title = title,
                Message = message,
                Value = value,
                ValidateValue = v =>
                {
                    return validateValue((string)v);
                }
            }).DialogOpen();
        }
    }

    [Imported, Serializable]
    public class PromptDialogOptions
    {
        public string CssClass { get; set; }
        public string EditorType { get; set; }
        public object EditorOptions { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
        public object Value { get; set; }
        public bool? Required { get; set; }
        public Func<object, bool> ValidateValue { get; set; }
    }
}
