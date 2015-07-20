
namespace Gimnet.Duyuru.Duyuru
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;
    using System.Text;

    [Editor, Element("<div/>")]
    public class NotEditor : Widget
    {
        public NotEditor(jQueryObject container)
            : base(container)
        {

            new PromptDialog(new PromptDialogOptions
            {
                Title = "Not Ekle",
                Value = "",
                EditorType = "HtmlBasicContentEditor",
                EditorOptions = new
                {
                    rows = 9
                },
                CssClass = "NotEkleDialog"
               
            }).DialogOpen();
        }

    }
}
