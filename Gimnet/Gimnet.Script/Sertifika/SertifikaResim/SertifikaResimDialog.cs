
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("ResimKonumu")]
    [FormKey("Sertifika.SertifikaResim"), LocalTextPrefix("Sertifika.SertifikaResim"), Service("Sertifika/SertifikaResim")]
    public class SertifikaResimDialog : EntityDialog<SertifikaResimRow>
    {

        protected override SertifikaResimRow GetSaveEntity()
        {
            var entity= base.GetSaveEntity();
            entity.SertifikaId = this.SertifikaId;
            return entity;
        }
        public int? SertifikaId { get; set; }
    }
}