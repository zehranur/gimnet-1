
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("KategoriAdi")]
    [FormKey("Sertifika.Kategori"), LocalTextPrefix("Sertifika.Kategori"), Service("Sertifika/Kategori")]
    public class KategoriDialog : EntityDialog<KategoriRow>
    {
        KategoriForm form;

        public KategoriDialog()
        {
            form = new KategoriForm(this.idPrefix);
        }

        protected override void LoadEntity(KategoriRow entity)
        {
            base.LoadEntity(entity);
            if (IsNew)
                form.EklenmeTarihi.Value = JsDate.Today.ToLocaleDateString();
        }
    }
}