
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sertifika.Kategori")]
    [BasedOnRow(typeof(Entities.KategoriRow))]
    public class KategoriForm
    {
        public String KategoriAdi { get; set; }
        public DateTime EklenmeTarihi { get; set; }
    }
}