
namespace Gimnet.Sertifika.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Sertifika Resimleri"), InstanceName("Sertifika Resimleri"), TwoLevelCached]
    [ReadPermission("Default")]
    [ModifyPermission("Default")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class SertifikaResimRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Resim Konumu"), Size(256), NotNull, QuickSearch]
        public String ResimKonumu
        {
            get { return Fields.ResimKonumu[this]; }
            set { Fields.ResimKonumu[this] = value; }
        }

        [DisplayName("Eklenme Tarihi"), NotNull]
        public DateTime? EklenmeTarihi
        {
            get { return Fields.EklenmeTarihi[this]; }
            set { Fields.EklenmeTarihi[this] = value; }
        }

        [DisplayName("Sertifika Id"), NotNull, ForeignKey("HelalSertifika", "Id"), LeftJoin("jSertifika")]
        public Int32? SertifikaId
        {
            get { return Fields.SertifikaId[this]; }
            set { Fields.SertifikaId[this] = value; }
        }

        [DisplayName("Sertifika Kategori Id"), Expression("jSertifika.KategoriId")]
        public Int32? SertifikaKategoriId
        {
            get { return Fields.SertifikaKategoriId[this]; }
            set { Fields.SertifikaKategoriId[this] = value; }
        }

        [DisplayName("Sertifika Firma Id"), Expression("jSertifika.FirmaId")]
        public Int32? SertifikaFirmaId
        {
            get { return Fields.SertifikaFirmaId[this]; }
            set { Fields.SertifikaFirmaId[this] = value; }
        }

        [DisplayName("Sertifika Marka"), Expression("jSertifika.Marka")]
        public String SertifikaMarka
        {
            get { return Fields.SertifikaMarka[this]; }
            set { Fields.SertifikaMarka[this] = value; }
        }

        [DisplayName("Sertifika İlk Basvuru Tarihi"), Expression("jSertifika.İlkBasvuruTarihi")]
        public DateTime? SertifikaİlkBasvuruTarihi
        {
            get { return Fields.SertifikaİlkBasvuruTarihi[this]; }
            set { Fields.SertifikaİlkBasvuruTarihi[this] = value; }
        }

        [DisplayName("Sertifika Son Yenileme Tarihi"), Expression("jSertifika.SonYenilemeTarihi")]
        public DateTime? SertifikaSonYenilemeTarihi
        {
            get { return Fields.SertifikaSonYenilemeTarihi[this]; }
            set { Fields.SertifikaSonYenilemeTarihi[this] = value; }
        }

        [DisplayName("Sertifika Sertifika Kapsamı"), Expression("jSertifika.SertifikaKapsami")]
        public String SertifikaSertifikaKapsami
        {
            get { return Fields.SertifikaSertifikaKapsami[this]; }
            set { Fields.SertifikaSertifikaKapsami[this] = value; }
        }

        [DisplayName("Sertifika Uyarı"), Expression("jSertifika.Uyari")]
        public String SertifikaUyari
        {
            get { return Fields.SertifikaUyari[this]; }
            set { Fields.SertifikaUyari[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ResimKonumu; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SertifikaResimRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field Id;
            public readonly StringField ResimKonumu;
            public readonly DateTimeField EklenmeTarihi;
            public readonly Int32Field SertifikaId;

            public readonly Int32Field SertifikaKategoriId;
            public readonly Int32Field SertifikaFirmaId;
            public readonly StringField SertifikaMarka;
            public readonly DateTimeField SertifikaİlkBasvuruTarihi;
            public readonly DateTimeField SertifikaSonYenilemeTarihi;
            public readonly StringField SertifikaSertifikaKapsami;
            public readonly StringField SertifikaUyari;


            public RowFields()
                : base("SertifikaResimleri")
            {
                LocalTextPrefix = "Sertifika.SertifikaResim";
            }
        }
    }
}