

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Helal Dünya Marketleri/Marketler", typeof(Gimnet.HelalDunyaMarket.Pages.HelalMarketController))]

namespace Gimnet.HelalDunyaMarket.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("HelalDunyaMarket/HelalMarket"), Route("{action=index}")]
    public class HelalMarketController : Controller
    {
        [PageAuthorize("Default")]
        public ActionResult Index()
        {
            return View("~/Modules/HelalDunyaMarket/HelalMarket/HelalMarketIndex.cshtml");
        }
    }
}