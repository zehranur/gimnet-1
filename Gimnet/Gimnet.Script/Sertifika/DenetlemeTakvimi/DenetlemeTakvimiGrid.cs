
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Sertifika.DenetlemeTakvimi"), IdProperty("Id"), NameProperty("Denetciler")]
    [DialogType(typeof(DenetlemeTakvimiDialog)), LocalTextPrefix("Sertifika.DenetlemeTakvimi"), Service("Sertifika/DenetlemeTakvimi")]
    public class DenetlemeTakvimiGrid : EntityGrid<DenetlemeTakvimiRow>
    {
        public DenetlemeTakvimiGrid(jQueryObject container)
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