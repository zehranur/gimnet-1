

[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Sertifikasyon/Kategoriler", typeof(Gimnet.Sertifika.Pages.KategoriController))]

namespace Gimnet.Sertifika.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sertifika/Kategori"), Route("{action=index}")]
    public class KategoriController : Controller
    {
        [PageAuthorize("Default")]
        public ActionResult Index()
        {
            return View("~/Modules/Sertifika/Kategori/KategoriIndex.cshtml");
        }
    }
}