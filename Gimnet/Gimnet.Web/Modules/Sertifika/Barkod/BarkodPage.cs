

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Sertifikasyon/Barkod", typeof(Gimnet.Sertifika.Pages.BarkodController))]

namespace Gimnet.Sertifika.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sertifika/Barkod"), Route("{action=index}")]
    public class BarkodController : Controller
    {
        [PageAuthorize("Default")]
        public ActionResult Index()
        {
            return View("~/Modules/Sertifika/Barkod/BarkodIndex.cshtml");
        }
    }
}