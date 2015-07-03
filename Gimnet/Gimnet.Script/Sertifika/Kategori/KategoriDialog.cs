
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("KategoriAdi")]
    [FormKey("Sertifika.Kategori"), LocalTextPrefix("Sertifika.Kategori"), Service("Sertifika/Kategori")]
    public class KategoriDialog : EntityDialog<KategoriRow>
    {
    }
}