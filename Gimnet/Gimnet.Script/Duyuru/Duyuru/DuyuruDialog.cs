
namespace Gimnet.Duyuru
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Baslik")]
    [FormKey("Duyuru.Duyuru"), LocalTextPrefix("Duyuru.Duyuru"), Service("Duyuru/Duyuru")]
    public class DuyuruDialog : EntityDialog<DuyuruRow>
    {
    }
}