using jQueryApi;
using System.ComponentModel;

namespace Gimnet.Sertifika
{
    using System.Collections.Generic;
    using System.Linq;
    using Serenity;

    [Editor, DisplayName("Resim Yükleme"), OptionsType(typeof(ImageUploadEditorOptions))]
    [Element("<div/>")]
    public class FirmaLogoUploadEditor : ImageUploadEditor
    {
        public FirmaLogoUploadEditor(jQueryObject div, ImageUploadEditorOptions opt)
            : base(div, opt)
        {
            this.toolbar.Element.AppendTo(this.element);
        }
        
        protected override List<ToolButton> GetToolButtons()
        {
            var buttons = base.GetToolButtons();
            var addButton = buttons.FirstOrDefault(s => s.CssClass == "add-file-button");
            addButton.Title = "Resim Değiştir";
            var deleteButton = buttons.FirstOrDefault(s => s.CssClass == "delete-button");
            deleteButton.Title = string.Empty;
            return buttons;
        }

        protected override void Populate()
        {
            bool displayOriginalName = !options.OriginalNameProperty.IsTrimmedEmpty();

            if (entity == null)
                PopulateFileSymbols(fileSymbols, null, displayOriginalName);
            else
                PopulateFileSymbols(fileSymbols, entity, displayOriginalName);
        }

        private void PopulateFileSymbols(jQueryObject fileElement, UploadedFile file, bool displayOriginalName)
        {
            fileElement.Html("");

            if (file == null || file.Filename.IsEmptyOrNull())
                return;

            var li = jQuery.FromHtml("<li/>");

            var isImage = UploadHelper.HasImageExtension(file.Filename);

            var thumb = jQuery.FromHtml("<a/>")
                .AppendTo(li);

            var originalName = file.OriginalName ?? "";

            string fileName = file.Filename;
            //if (!fileName.StartsWith("temporary/"))
            //    fileName = "personelFoto/" + fileName;

            thumb.Attribute("href", UploadHelper.DbFileUrl(fileName));
            thumb.Attribute("target", "_blank");

            if (!originalName.IsEmptyOrNull())
                thumb.Attribute("title", (originalName));

            var img = J("<img/>").Attribute("src", UploadHelper.DbFileUrl(fileName)).AppendTo(thumb);

            UploadHelper.ColorBox(thumb, new object());

            if (displayOriginalName)
            {
                jQuery.FromHtml("<div/>")
                    .AddClass("filename")
                    .Text(originalName)
                    .Attribute("title", originalName)
                    .AppendTo(li);
            }

            li.AppendTo(fileElement);
        }
    }
}