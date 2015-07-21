
namespace Gimnet.Duyuru
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Baslik")]
    [FormKey("Duyuru.Duyuru"), LocalTextPrefix("Duyuru.Duyuru"), Service("Duyuru/Duyuru")]
    public class DuyuruDialog : EntityDialog<DuyuruRow>
    {
        DuyuruForm form;

        public DuyuruDialog()
        {
            form = new DuyuruForm(this.idPrefix);
        }

        protected override void LoadEntity(DuyuruRow entity)
        {
            base.LoadEntity(entity);
            if (IsNew)
            {
                form.EklemeTarihi.Value = "Today";
                if (string.IsNullOrEmpty(form.SonTarih.Value))
                {
                    form.SonTarih.Value = DateTime.Now.AddYears(1).ToDateString();
                }
            }
        }
    }
}