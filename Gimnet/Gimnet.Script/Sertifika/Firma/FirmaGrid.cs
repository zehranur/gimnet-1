
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

}