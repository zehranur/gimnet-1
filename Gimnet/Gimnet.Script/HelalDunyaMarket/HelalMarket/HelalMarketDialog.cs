
namespace Gimnet.HelalDunyaMarket
{
using jQueryApi;
using Serenity;
using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Adi")]
    [FormKey("HelalDunyaMarket.HelalMarket"), LocalTextPrefix("HelalDunyaMarket.HelalMarket"), Service("HelalDunyaMarket/HelalMarket")]
    public class HelalMarketDialog : EntityDialog<HelalMarketRow>
    {
       
    }
}