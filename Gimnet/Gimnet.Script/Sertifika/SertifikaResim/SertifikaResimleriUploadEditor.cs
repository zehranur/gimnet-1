using jQueryApi;
using System.ComponentModel;

namespace Gimnet.Sertifika
{
    using System.Collections.Generic;
    using System.Linq;
    using Serenity;

    [Editor, DisplayName("Sertifika Resimleri"), OptionsType(typeof(ImageUploadEditorOptions))]
    [Element("<div/>")]
    public class SertifikaResimleriUploadEditor : MultipleImageUploadEditor
    {
        public SertifikaResimleriUploadEditor(jQueryObject div, ImageUploadEditorOptions opt)
            : base(div, opt)
        {
            this.toolbar.Element.AppendTo(this.element);
        }
    }
}