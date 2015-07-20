
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Marka")]
    [FormKey("Sertifika.HelalSertifika"), LocalTextPrefix("Sertifika.HelalSertifika"), Service("Sertifika/HelalSertifika")]
    public class HelalSertifikaDialog : EntityDialog<HelalSertifikaRow>
    {
        HelalSertifikaForm form;

        public HelalSertifikaDialog()
        {
            form = new HelalSertifikaForm(this.idPrefix);
        }

        protected override void LoadEntity(HelalSertifikaRow entity)
        {
            base.LoadEntity(entity);
           
        }
    }
}