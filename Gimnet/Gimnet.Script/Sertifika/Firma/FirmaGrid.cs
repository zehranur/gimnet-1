
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Sertifika.Firma"), IdProperty("Id"), NameProperty("FirmaAdi")]
    [DialogType(typeof(FirmaDialog)), LocalTextPrefix("Sertifika.Firma"), Service("Sertifika/Firma")]
    public class FirmaGrid : EntityGrid<FirmaRow>
    {
        public FirmaGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class FirmaRow
    {
    }
}