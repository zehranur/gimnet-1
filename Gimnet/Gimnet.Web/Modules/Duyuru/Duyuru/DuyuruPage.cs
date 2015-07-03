

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Duyuru/Duyurular", typeof(Gimnet.Duyuru.Pages.DuyuruController))]

namespace Gimnet.Duyuru.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Duyuru/Duyuru"), Route("{action=index}")]
    public class DuyuruController : Controller
    {
        [PageAuthorize("Default")]
        public ActionResult Index()
        {
            return View("~/Modules/Duyuru/Duyuru/DuyuruIndex.cshtml");
        }
    }
}