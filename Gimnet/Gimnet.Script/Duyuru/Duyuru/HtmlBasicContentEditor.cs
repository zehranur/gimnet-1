
namespace Serenity
{
    using jQueryApi;
    using System.ComponentModel;

    [Editor, DisplayName("Html İçerik (En Temel Set)"), OptionsType(typeof(HtmlContentEditorOptions))]
    [Element("<textarea />")]
    public class HtmlBasicContentEditor : HtmlContentEditor, IStringValue
    {
        public HtmlBasicContentEditor(jQueryObject textArea, HtmlContentEditorOptions opt)
            : base(textArea, opt)
        {
        }

        protected override CKEditorConfig GetConfig()
        {
            var config = base.GetConfig();
            config.RemoveButtons += ",Undo,Redo,Cut,Copy,Paste,BulletedList,NumberedList,Indent,Outdent,SpecialChar,Subscript,Superscript,PasteText,PasteFromWord,Strike,Unlink,CreatePlaceholder,Image,Table,HorizontalRule,Source,Maximize,Format,Anchor,Blockquote,CreatePlaceholder,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Superscript,RemoveFormat";
            config.RemovePlugins += ",elementspath";
            return config;
        }
    }
}