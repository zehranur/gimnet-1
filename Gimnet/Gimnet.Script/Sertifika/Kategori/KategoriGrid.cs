
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Sertifika.Kategori"), IdProperty("Id"), NameProperty("KategoriAdi")]
    [DialogType(typeof(KategoriDialog)), LocalTextPrefix("Sertifika.Kategori"), Service("Sertifika/Kategori")]
    public class KategoriGrid : EntityGrid<KategoriRow>
    {
        public KategoriGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class KategoriRow
    {
    }
}