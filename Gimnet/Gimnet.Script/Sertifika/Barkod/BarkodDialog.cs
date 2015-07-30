
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Barkod")]
    [FormKey("Sertifika.Barkod"), LocalTextPrefix("Sertifika.Barkod"), Service("Sertifika/Barkod")]
    public class BarkodDialog : EntityDialog<BarkodRow>
    {
        BarkodForm form;
        public BarkodDialog()
        {
            form = new BarkodForm(this.idPrefix);
        }

        protected override void LoadEntity(BarkodRow entity)
        {
            base.LoadEntity(entity);
            form.SertifikaId.GetGridField().Hide();
        }
    }
}