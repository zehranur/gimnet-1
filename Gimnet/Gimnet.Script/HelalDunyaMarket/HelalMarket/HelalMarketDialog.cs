
namespace Gimnet.HelalDunyaMarket
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Adi")]
    [FormKey("HelalDunyaMarket.HelalMarket"), LocalTextPrefix("HelalDunyaMarket.HelalMarket"), Service("HelalDunyaMarket/HelalMarket")]
    public class HelalMarketDialog : EntityDialog<HelalMarketRow>
    {
        HelalMarketForm form;

        public HelalMarketDialog()
        {
            form = new HelalMarketForm(this.idPrefix);
        }

        protected override void LoadEntity(HelalMarketRow entity)
        {
            base.LoadEntity(entity);
            if (IsNew)
                form.EklemeTarihi.Value = "Today";
        }
    }
}