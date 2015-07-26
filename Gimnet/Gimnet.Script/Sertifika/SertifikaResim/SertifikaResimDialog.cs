
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("ResimKonumu")]
    [FormKey("Sertifika.SertifikaResim"), LocalTextPrefix("Sertifika.SertifikaResim"), Service("Sertifika/SertifikaResim")]
    public class SertifikaResimDialog : EntityDialog<SertifikaResimRow>
    {
        private SertifikaResimForm form;

        public SertifikaResimDialog()
        {
            form = new SertifikaResimForm(this.idPrefix);
            form.SertifikaId.Value = this.SertifikaId;
        } 
        
        protected override void LoadEntity(SertifikaResimRow entity)
        {
            base.LoadEntity(entity);
            form.SertifikaId.Value = this.SertifikaId;
            //entity.SertifikaId = SertifikaId;
        }
        protected override SertifikaResimRow GetSaveEntity()
        {
            var entity= base.GetSaveEntity();
            entity.SertifikaId = this.SertifikaId;
            return entity;
        }
        public int? SertifikaId { get; set; }
    }
}