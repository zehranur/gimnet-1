
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

        private FirmaRow firmaRow;
        public FirmaRow FirmaRow
        {
            get { return this.firmaRow; }
            set
            {
                this.firmaRow = value;
                Refresh();
            }
        }

        protected override Widget CreateEntityDialog(string itemType, Action<Widget> callback)
        {
            var dialog = base.CreateEntityDialog(itemType, callback);

            if (itemType == GetItemType())
                dialog.As<DenetlemeTakvimiDialog>().FirmaId = this.firmaRow.Id;
            return dialog;
        }

        protected override bool OnViewSubmit()
        {
            if (!base.OnViewSubmit())
                return false;

            if (this.firmaRow == null || this.firmaRow.Id == null)
                return false;

            var eqFilter = new JsDictionary<string, Object>();
            eqFilter["FirmaId"] = this.firmaRow.Id;
            view.Params.EqualityFilter = eqFilter;
            return true;
        }
    }
}