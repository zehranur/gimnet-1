
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class SertifikaResimRow
    {
        public Int32? Id { get; set; }
        public String ResimKonumu { get; set; }
        public String EklenmeTarihi { get; set; }
        public Int32? SertifikaId { get; set; }
        public Int32? SertifikaKategoriId { get; set; }
        public Int32? SertifikaFirmaId { get; set; }
        public String SertifikaMarka { get; set; }
        public String SertifikaİlkBasvuruTarihi { get; set; }
        public String SertifikaSonYenilemeTarihi { get; set; }
        public String SertifikaSertifikaKapsami { get; set; }
        public String SertifikaUyari { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string ResimKonumu = "ResimKonumu";
            [InlineConstant] public const string EklenmeTarihi = "EklenmeTarihi";
            [InlineConstant] public const string SertifikaId = "SertifikaId";
            [InlineConstant] public const string SertifikaKategoriId = "SertifikaKategoriId";
            [InlineConstant] public const string SertifikaFirmaId = "SertifikaFirmaId";
            [InlineConstant] public const string SertifikaMarka = "SertifikaMarka";
            [InlineConstant] public const string SertifikaİlkBasvuruTarihi = "SertifikaİlkBasvuruTarihi";
            [InlineConstant] public const string SertifikaSonYenilemeTarihi = "SertifikaSonYenilemeTarihi";
            [InlineConstant] public const string SertifikaSertifikaKapsami = "SertifikaSertifikaKapsami";
            [InlineConstant] public const string SertifikaUyari = "SertifikaUyari";
        }
    }
    
}

