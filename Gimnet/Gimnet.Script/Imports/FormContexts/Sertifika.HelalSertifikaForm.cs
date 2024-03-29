
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
        [InlineConstant] public const string FormKey = "Sertifika.HelalSertifika";
    
        public HelalSertifikaForm(string idPrefix) : base(idPrefix) {}
    
        public Kategori.KategoriLookupEditor KategoriId { get { return ById<Kategori.KategoriLookupEditor>("KategoriId"); } }
        public Firma.FirmaLookupEditor FirmaId { get { return ById<Firma.FirmaLookupEditor>("FirmaId"); } }
        public StringEditor Marka { get { return ById<StringEditor>("Marka"); } }
        public DateEditor İlkBasvuruTarihi { get { return ById<DateEditor>("İlkBasvuruTarihi"); } }
        public DateEditor YenilemeTarihi { get { return ById<DateEditor>("YenilemeTarihi"); } }
        public TextAreaEditor SertifikaKapsami { get { return ById<TextAreaEditor>("SertifikaKapsami"); } }
        public EnumEditor Durum { get { return ById<EnumEditor>("Durum"); } }
        public TextAreaEditor KapsamDisi { get { return ById<TextAreaEditor>("KapsamDisi"); } }
        public DateEditor BitisTarihi { get { return ById<DateEditor>("BitisTarihi"); } }
        public StringEditor İptalAciklamasi { get { return ById<StringEditor>("İptalAciklamasi"); } }
        public MultipleImageUploadEditor SertifikaResimleri { get { return ById<MultipleImageUploadEditor>("SertifikaResimleri"); } }
    }
}

