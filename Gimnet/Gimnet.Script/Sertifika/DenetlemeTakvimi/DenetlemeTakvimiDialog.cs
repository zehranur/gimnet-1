
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Denetciler")]
    [FormKey("Sertifika.DenetlemeTakvimi"), LocalTextPrefix("Sertifika.DenetlemeTakvimi"), Service("Sertifika/DenetlemeTakvimi")]
    public class DenetlemeTakvimiDialog : EntityDialog<DenetlemeTakvimiRow>
    {
    }
}