
namespace Gimnet.Sertifika
{
    using Gimnet.Sertifika.DenetlemeTakvimi;
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("FirmaAdi")]
    [FormKey("Sertifika.Firma"), LocalTextPrefix("Sertifika.Firma"), Service("Sertifika/Firma")]
    public class FirmaDialog : EntityDialog<FirmaRow>
    {
        private FirmaForm form;

        public FirmaDialog()
        {
            form = new FirmaForm(this.idPrefix);

            //form.BuyukLogo.GetGridField().Hide();
            //form.OrtaLogo.GetGridField().Hide();

            //PropertyGrid.SetReadOnly(form.BuyukLogo, true);
        }

        protected override void LoadEntity(FirmaRow entity)
        {
            base.LoadEntity(entity);
        }

        protected override List<ToolButton> GetToolbarButtons()
        {
            var buttons = base.GetToolbarButtons();
            buttons.Add(new ToolButton
            {
                Title = "Denetleme Takvimi",
                CssClass = "outlook-meeting-button",
                OnClick = delegate
                {
                    new DenetlemeTakvimiGridDialog().LoadByIdAndOpenDialog(Entity.Id.Value);
                }

            });
            return buttons;
        }
    }
}