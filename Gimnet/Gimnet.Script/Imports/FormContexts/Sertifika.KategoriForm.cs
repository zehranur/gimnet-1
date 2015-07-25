
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    using Gimnet.Sertifika;
    using Gimnet.Sertifika.Kategori;
    using Gimnet.Sertifika.Firma;

    public partial class KategoriForm : PrefixedContext
    {
        public KategoriForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor KategoriAdi { get { return ById<StringEditor>("KategoriAdi"); } }
        public DateEditor EklenmeTarihi { get { return ById<DateEditor>("EklenmeTarihi"); } }
    }
}

