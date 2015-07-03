

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Sertifikasyon/Helal Sertifikaları", typeof(Gimnet.Sertifika.Pages.HelalSertifikaController))]

namespace Gimnet.Sertifika.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sertifika/HelalSertifika"), Route("{action=index}")]
    public class HelalSertifikaController : Controller
    {
        [PageAuthorize("Default")]
        public ActionResult Index()
        {
            return View("~/Modules/Sertifika/HelalSertifika/HelalSertifikaIndex.cshtml");
        }
    }
}