
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sertifika.HelalSertifika")]
    [BasedOnRow(typeof(Entities.HelalSertifikaRow))]
    public class HelalSertifikaForm
    {
        public Int32 KategoriId { get; set; }
        public Int32 FirmaId { get; set; }
        public String Marka { get; set; }
        public DateTime İlkBasvuruTarihi { get; set; }
        public DateTime SonYenilemeTarihi { get; set; }
        public String SertifikaKapsami { get; set; }
        public String Uyari { get; set; }
    }
}