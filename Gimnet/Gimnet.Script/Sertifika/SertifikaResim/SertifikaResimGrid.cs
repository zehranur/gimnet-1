
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Sertifika.SertifikaResim"), IdProperty("Id"), NameProperty("ResimKonumu")]
    [DialogType(typeof(SertifikaResimDialog)), LocalTextPrefix("Sertifika.SertifikaResim"), Service("Sertifika/SertifikaResim")]
    public class SertifikaResimGrid : EntityGrid<SertifikaResimRow>
    {
        public SertifikaResimGrid(jQueryObject container)
            : base(container)
        {
        }
    }

}