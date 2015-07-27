
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Gimnet.Sertifika.Kategori;
    using Gimnet.Sertifika.Firma;

    [FormScript("Sertifika.HelalSertifika")]
    [BasedOnRow(typeof(Entities.HelalSertifikaRow))]
    public class HelalSertifikaForm
    {
        [KategoriLookupEditor]
        public Int32 KategoriId { get; set; }
        [FirmaLookupEditor]
        public Int32 FirmaId { get; set; }
        public String Marka { get; set; }
        public DateTime İlkBasvuruTarihi { get; set; }
        public DateTime YenilemeTarihi { get; set; }
        public String SertifikaKapsami { get; set; }
        public SertifikaDurumIds Durum { get; set; }
        public String KapsamDisi { get; set; }
        public DateTime BitisTarihi { get; set; }
        public String İptalAciklamasi { get; set; }
        [ImageUploadEditor(allowMultiple: true, JsonEncodeValue = true)]
        public String SertifikaResimleri { get; set; }
    }
}