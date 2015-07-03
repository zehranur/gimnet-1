
namespace Gimnet.HelalDunyaMarket
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("HelalDunyaMarket.HelalMarket"), IdProperty("Id"), NameProperty("Adi")]
    [DialogType(typeof(HelalMarketDialog)), LocalTextPrefix("HelalDunyaMarket.HelalMarket"), Service("HelalDunyaMarket/HelalMarket")]
    public class HelalMarketGrid : EntityGrid<HelalMarketRow>
    {
        public HelalMarketGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class HelalMarketRow
    {
    }
}