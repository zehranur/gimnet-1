
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Sertifika.SertifikaResim"), IdProperty("Id"), NameProperty("ResimKonumu")]
    [DialogType(typeof(SertifikaResimDialog)), LocalTextPrefix("Sertifika.SertifikaResim"), Service("Sertifika/SertifikaResim")]
    public class SertifikaResimGrid : EntityGrid<SertifikaResimRow>
    {
        public SertifikaResimGrid(jQueryObject container)
            : base(container)
        {

        }

        private HelalSertifikaRow sertifikaRow;
        public HelalSertifikaRow SertifikaRow
        {
            get { return this.sertifikaRow; }
            set
            {
                this.sertifikaRow = value;
                Refresh();
            }
        }

        protected override Widget CreateEntityDialog(string itemType, Action<Widget> callback)
        {
            var dialog = base.CreateEntityDialog(itemType, callback);

            if (itemType == GetItemType())
                dialog.As<SertifikaResimDialog>().SertifikaId = this.sertifikaRow.Id;
            return dialog;
        }

        protected override bool OnViewSubmit()
        {
            if (!base.OnViewSubmit())
                return false;

            if (this.sertifikaRow == null || this.sertifikaRow.Id == null)
                return false;

            var eqFilter = new JsDictionary<string, Object>();
            eqFilter["SertifikaId"] = this.sertifikaRow.Id;
            view.Params.EqualityFilter = eqFilter;
            return true;
        }
    }

}