

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Sertifikasyon/Firmalar", typeof(Gimnet.Sertifika.Pages.FirmaController))]

namespace Gimnet.Sertifika.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sertifika/Firma"), Route("{action=index}")]
    public class FirmaController : Controller
    {
        [PageAuthorize("Default")]
        public ActionResult Index()
        {
            return View("~/Modules/Sertifika/Firma/FirmaIndex.cshtml");
        }
    }
}