
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Marka")]
    [FormKey("Sertifika.HelalSertifika"), LocalTextPrefix("Sertifika.HelalSertifika"), Service("Sertifika/HelalSertifika")]
    public class HelalSertifikaDialog : EntityDialog<HelalSertifikaRow>
    {
    }
}