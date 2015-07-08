
namespace Gimnet.Sertifika
{
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
    }
}