
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class HelalSertifikaForm : PrefixedContext
    {
        public HelalSertifikaForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor KategoriId { get { return ById<IntegerEditor>("KategoriId"); } }
        public IntegerEditor FirmaId { get { return ById<IntegerEditor>("FirmaId"); } }
        public StringEditor Marka { get { return ById<StringEditor>("Marka"); } }
        public DateEditor İlkBasvuruTarihi { get { return ById<DateEditor>("İlkBasvuruTarihi"); } }
        public DateEditor SonYenilemeTarihi { get { return ById<DateEditor>("SonYenilemeTarihi"); } }
        public StringEditor SertifikaKapsami { get { return ById<StringEditor>("SertifikaKapsami"); } }
        public StringEditor Uyari { get { return ById<StringEditor>("Uyari"); } }
    }
}

