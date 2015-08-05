

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Sertifikasyon/Denetleme Takvimi", typeof(Gimnet.Sertifika.Pages.DenetlemeTakvimiController))]

namespace Gimnet.Sertifika.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sertifika/DenetlemeTakvimi"), Route("{action=index}")]
    public class DenetlemeTakvimiController : Controller
    {
        [PageAuthorize("Default")]
        public ActionResult Index()
        {
            return View("~/Modules/Sertifika/DenetlemeTakvimi/DenetlemeTakvimiIndex.cshtml");
        }
    }
}