
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Denetciler")]
    [FormKey("Sertifika.DenetlemeTakvimi"), LocalTextPrefix("Sertifika.DenetlemeTakvimi"), Service("Sertifika/DenetlemeTakvimi")]
    public class DenetlemeTakvimiDialog : EntityDialog<DenetlemeTakvimiRow>
    {
        DenetlemeTakvimiForm form;

        public DenetlemeTakvimiDialog()
        {
            form = new DenetlemeTakvimiForm(this.idPrefix);
            form.FirmaId.Value = this.FirmaId;
        }

        public int? FirmaId { get; set; }

        protected override void LoadEntity(DenetlemeTakvimiRow entity)
        {
            base.LoadEntity(entity);
            form.FirmaId.Value = this.FirmaId;
            if (IsNew)
            {
                
            }

            form.FirmaId.GetGridField().Hide();
        }
    }
}