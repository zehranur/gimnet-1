
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    using Gimnet.Duyuru.Duyuru;
    using Gimnet.Sertifika.Kategori;
    using Gimnet.Sertifika.Firma;

    public partial class SertifikaResimForm : PrefixedContext
    {
        public SertifikaResimForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor ResimKonumu { get { return ById<StringEditor>("ResimKonumu"); } }
        public DateEditor EklenmeTarihi { get { return ById<DateEditor>("EklenmeTarihi"); } }
        public IntegerEditor SertifikaId { get { return ById<IntegerEditor>("SertifikaId"); } }
    }
}

