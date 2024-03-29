﻿(function() {
	'use strict';
	var $asm = {};
	global.Serenity = global.Serenity || {};
	global.Serenity.ComponentModel = global.Serenity.ComponentModel || {};
	global.Serenity.Reporting = global.Serenity.Reporting || {};
	global.System = global.System || {};
	global.System.ComponentModel = global.System.ComponentModel || {};
	ss.initAssembly($asm, 'Serenity.Script.UI');
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterPanel.FieldSelect
	var $Serenity_$FilterPanel$FieldSelect = function(hidden, fields) {
		ss.makeGenericType($Serenity_Select2Editor$2, [Object, Object]).call(this, hidden, null);
		var $t1 = ss.getEnumerator(fields);
		try {
			while ($t1.moveNext()) {
				var field = $t1.current();
				var $t4 = field.name;
				var $t3 = Q.tryGetText(field.title);
				if (ss.isNullOrUndefined($t3)) {
					var $t2 = field.title;
					if (ss.isNullOrUndefined($t2)) {
						$t2 = field.name;
					}
					$t3 = $t2;
				}
				this.addItem($t4, $t3, field, false);
			}
		}
		finally {
			$t1.dispose();
		}
	};
	$Serenity_$FilterPanel$FieldSelect.__typeName = 'Serenity.$FilterPanel$FieldSelect';
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterPanel.OperatorSelect
	var $Serenity_$FilterPanel$OperatorSelect = function(hidden, source) {
		ss.makeGenericType($Serenity_Select2Editor$2, [Object, Object]).call(this, hidden, null);
		var $t1 = ss.getEnumerator(source);
		try {
			while ($t1.moveNext()) {
				var op = $t1.current();
				var $t3 = op.title;
				if (ss.isNullOrUndefined($t3)) {
					var $t2 = Q.tryGetText('Controls.FilterPanel.OperatorNames.' + op.key);
					if (ss.isNullOrUndefined($t2)) {
						$t2 = op.key;
					}
					$t3 = $t2;
				}
				var title = $t3;
				this.addItem(op.key, title, op, false);
			}
		}
		finally {
			$t1.dispose();
		}
		var first = Enumerable.from(source).firstOrDefault(null, ss.getDefaultValue(Object));
		if (ss.isValue(first)) {
			this.set_value(first.key);
		}
	};
	$Serenity_$FilterPanel$OperatorSelect.__typeName = 'Serenity.$FilterPanel$OperatorSelect';
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.AsyncLookupEditor
	var $Serenity_AsyncLookupEditor = function(hidden, opt) {
		ss.makeGenericType($Serenity_LookupEditorBase$2, [$Serenity_LookupEditorOptions, Object]).call(this, hidden, opt);
	};
	$Serenity_AsyncLookupEditor.__typeName = 'Serenity.AsyncLookupEditor';
	global.Serenity.AsyncLookupEditor = $Serenity_AsyncLookupEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.BaseEditorFiltering
	var $Serenity_BaseEditorFiltering$1 = function(TEditor) {
		var $type = function() {
			this.editor = null;
			$Serenity_BaseFiltering.call(this);
		};
		ss.registerGenericClassInstance($type, $Serenity_BaseEditorFiltering$1, [TEditor], {
			useEditor: function() {
				switch (this.get_operator().key) {
					case 'eq':
					case 'ne':
					case 'lt':
					case 'le':
					case 'gt':
					case 'ge': {
						return true;
					}
				}
				return false;
			},
			createEditor: function() {
				if (this.useEditor()) {
					this.editor = $Serenity_Widget.createInside(TEditor).call(null, this.get_container(), this.getEditorOptions(), null);
					return;
				}
				$Serenity_BaseFiltering.prototype.createEditor.call(this);
			},
			useIdField: function() {
				return false;
			},
			getCriteriaField: function() {
				if (this.useEditor() && this.useIdField() && !Q.isEmptyOrNull(this.get_field().filteringIdField)) {
					return this.get_field().filteringIdField;
				}
				return $Serenity_BaseFiltering.prototype.getCriteriaField.call(this);
			},
			getEditorOptions: function() {
				return this.get_field().filteringParams;
			},
			loadState: function(state) {
				if (this.useEditor()) {
					if (ss.isNullOrUndefined(state)) {
						return;
					}
					$Serenity_PropertyGrid.loadEditorValue(this.editor, { name: '_' }, state);
					return;
				}
				$Serenity_BaseFiltering.prototype.loadState.call(this, state);
			},
			saveState: function() {
				if (this.useEditor()) {
					var target = {};
					$Serenity_PropertyGrid.saveEditorValue(this.editor, { name: '_' }, target);
					return target;
				}
				return $Serenity_BaseFiltering.prototype.saveState.call(this);
			},
			getEditorValue: function() {
				if (this.useEditor()) {
					var target = {};
					$Serenity_PropertyGrid.saveEditorValue(this.editor, { name: '_' }, target);
					var value = target['_'];
					if (ss.isNullOrUndefined(value) || ss.isInstanceOfType(value, String) && ss.cast(value, String).trim().length === 0) {
						throw this.argumentNull();
					}
					return target['_'];
				}
				return $Serenity_BaseFiltering.prototype.getEditorValue.call(this);
			}
		}, function() {
			return $Serenity_BaseFiltering;
		}, function() {
			return [$Serenity_IFiltering];
		});
		return $type;
	};
	$Serenity_BaseEditorFiltering$1.__typeName = 'Serenity.BaseEditorFiltering$1';
	ss.initGenericClass($Serenity_BaseEditorFiltering$1, $asm, 1);
	global.Serenity.BaseEditorFiltering$1 = $Serenity_BaseEditorFiltering$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.BaseFiltering
	var $Serenity_BaseFiltering = function() {
		this.$1$FieldField = null;
		this.$1$ContainerField = null;
		this.$1$OperatorField = null;
	};
	$Serenity_BaseFiltering.__typeName = 'Serenity.BaseFiltering';
	global.Serenity.BaseFiltering = $Serenity_BaseFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.BooleanEditor
	var $Serenity_BooleanEditor = function(input) {
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, input, new Object());
		input.removeClass('flexify');
	};
	$Serenity_BooleanEditor.__typeName = 'Serenity.BooleanEditor';
	global.Serenity.BooleanEditor = $Serenity_BooleanEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.BooleanFiltering
	var $Serenity_BooleanFiltering = function() {
		$Serenity_BaseFiltering.call(this);
	};
	$Serenity_BooleanFiltering.__typeName = 'Serenity.BooleanFiltering';
	global.Serenity.BooleanFiltering = $Serenity_BooleanFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.CheckListEditor
	var $Serenity_CheckListEditor = function(div, opt) {
		this.$list = null;
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_CheckListEditorOptions]).call(this, div, opt);
		div.addClass('s-CheckListEditor');
		this.$list = $('<ul/>').appendTo(div);
		this.updateItems();
	};
	$Serenity_CheckListEditor.__typeName = 'Serenity.CheckListEditor';
	global.Serenity.CheckListEditor = $Serenity_CheckListEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.CheckListEditorOptions
	var $Serenity_CheckListEditorOptions = function() {
	};
	$Serenity_CheckListEditorOptions.__typeName = 'Serenity.CheckListEditorOptions';
	$Serenity_CheckListEditorOptions.createInstance = function() {
		return $Serenity_CheckListEditorOptions.$ctor();
	};
	$Serenity_CheckListEditorOptions.$ctor = function() {
		var $this = {};
		$this.items = null;
		$this.selectAllOptionText = null;
		$this.selectAllOptionText = 'Tümünü Seç';
		$this.items = [];
		return $this;
	};
	global.Serenity.CheckListEditorOptions = $Serenity_CheckListEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.CheckTreeEditor
	var $Serenity_CheckTreeEditor$1 = function(TOptions) {
		var $type = function(div, opt) {
			ss.makeGenericType($Serenity_CheckTreeEditor$2, [Object, TOptions]).call(this, div, opt);
		};
		ss.registerGenericClassInstance($type, $Serenity_CheckTreeEditor$1, [TOptions], {}, function() {
			return ss.makeGenericType($Serenity_CheckTreeEditor$2, [Object, TOptions]);
		}, function() {
			return [$Serenity_IDataGrid, $Serenity_IGetEditValue, $Serenity_ISetEditValue];
		});
		return $type;
	};
	$Serenity_CheckTreeEditor$1.__typeName = 'Serenity.CheckTreeEditor$1';
	ss.initGenericClass($Serenity_CheckTreeEditor$1, $asm, 1);
	global.Serenity.CheckTreeEditor$1 = $Serenity_CheckTreeEditor$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.CheckTreeEditor
	var $Serenity_CheckTreeEditor$2 = function(TItem, TOptions) {
		var $type = function(div, opt) {
			this.$byId = null;
			ss.makeGenericType($Serenity_DataGrid$2, [TItem, TOptions]).call(this, div, opt);
			div.addClass('s-CheckTreeEditor');
			this.updateItems();
		};
		ss.registerGenericClassInstance($type, $Serenity_CheckTreeEditor$2, [TItem, TOptions], {
			getItems: function() {
				return [];
			},
			updateItems: function() {
				var items = this.getItems();
				var itemById = {};
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					item.children = [];
					if (!Q.isEmptyOrNull(item.id)) {
						itemById[item.id] = item;
					}
					if (!Q.isEmptyOrNull(item.parentId)) {
						var parent = itemById[item.parentId];
						if (ss.isValue(parent)) {
							parent.children.push(item);
						}
					}
				}
				this.view.addData({ Entities: items, Skip: 0, Take: 0, TotalCount: items.length });
				this.updateSelectAll();
				this.updateFlags();
			},
			getEditValue: function(property, target) {
				target[property.name] = this.get_value();
			},
			setEditValue: function(source, property) {
				var list = ss.safeCast(source[property.name], Array);
				if (ss.isValue(list)) {
					this.set_value(list);
				}
			},
			getButtons: function() {
				var selectAllText = this.getSelectAllText();
				if (Q.isEmptyOrNull(selectAllText)) {
					return null;
				}
				var self = this;
				var $t1 = [];
				$t1.push($Serenity_GridSelectAllButtonHelper.define(TItem).call(null, function() {
					return self;
				}, function(x) {
					return x.id;
				}, function(x1) {
					return x1.isSelected;
				}, ss.mkdel(this, function(x2, v) {
					if (x2.isSelected !== v) {
						x2.isSelected = v;
						this.itemSelectedChanged(x2);
					}
				}), null, ss.mkdel(this, function() {
					this.updateFlags();
				})));
				return $t1;
			},
			itemSelectedChanged: function(item) {
			},
			getSelectAllText: function() {
				return 'Tümünü Seç';
			},
			isThreeStateHierarchy: function() {
				return false;
			},
			createSlickGrid: function() {
				this.element.addClass('slick-no-cell-border').addClass('slick-no-odd-even');
				var result = ss.makeGenericType($Serenity_DataGrid$2, [TItem, TOptions]).prototype.createSlickGrid.call(this);
				this.element.addClass('slick-hide-header');
				result.resizeCanvas();
				return result;
			},
			onViewFilter: function(item) {
				if (!ss.makeGenericType($Serenity_DataGrid$2, [TItem, TOptions]).prototype.onViewFilter.call(this, item)) {
					return false;
				}
				var items = this.view.getItems();
				var self = this;
				return Serenity.SlickTreeHelper.filterCustom(item, function(x) {
					if (ss.isNullOrUndefined(x.parentId)) {
						return null;
					}
					if (ss.isNullOrUndefined(self.$byId)) {
						self.$byId = {};
						for (var i = 0; i < items.length; i++) {
							var o = items[i];
							if (ss.isValue(o.id)) {
								self.$byId[o.id] = o;
							}
						}
					}
					return self.$byId[x.parentId];
				});
			},
			getInitialCollapse: function() {
				return false;
			},
			onViewProcessData: function(response) {
				response = ss.makeGenericType($Serenity_DataGrid$2, [TItem, TOptions]).prototype.onViewProcessData.call(this, response);
				this.$byId = null;
				Serenity.SlickTreeHelper.setIndents(response.Entities, function(x) {
					return x.id;
				}, function(x1) {
					return x1.parentId;
				}, this.getInitialCollapse());
				return response;
			},
			onClick: function(e, row, cell) {
				ss.makeGenericType($Serenity_DataGrid$2, [TItem, TOptions]).prototype.onClick.call(this, e, row, cell);
				if (!e.isDefaultPrevented()) {
					Serenity.SlickTreeHelper.toggleClick(TItem).call(null, e, row, cell, this.view, function(x) {
						return x.id;
					});
				}
				if (e.isDefaultPrevented()) {
					return;
				}
				var target = $(e.target);
				if (target.hasClass('check-box')) {
					var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
					var item = this.view.rows[row];
					var anyChanged = item.isSelected !== !checkedOrPartial;
					this.view.beginUpdate();
					try {
						if (item.isSelected !== !checkedOrPartial) {
							item.isSelected = !checkedOrPartial;
							this.view.updateItem(item.id, item);
							this.itemSelectedChanged(item);
						}
						anyChanged = this.$setAllSubTreeSelected(item, item.isSelected) | anyChanged;
						this.updateSelectAll();
						this.updateFlags();
					}
					finally {
						this.view.endUpdate();
					}
					if (anyChanged) {
						this.element.triggerHandler('change');
					}
				}
			},
			updateSelectAll: function() {
				$Serenity_GridSelectAllButtonHelper.update(TItem).call(null, this, function(x) {
					return x.isSelected;
				});
			},
			updateFlags: function() {
				var view = this.view;
				var items = view.getItems();
				var threeState = this.isThreeStateHierarchy();
				if (!threeState) {
					return;
				}
				view.beginUpdate();
				try {
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						if (ss.isNullOrUndefined(item.children) || item.children.length === 0) {
							var allsel = this.getDescendantsSelected(item);
							if (allsel !== item.isAllDescendantsSelected) {
								item.isAllDescendantsSelected = allsel;
								view.updateItem(item.id, item);
							}
							continue;
						}
						var allSelected = this.allDescendantsSelected(item);
						var selected = allSelected || this.anyDescendantsSelected(item);
						if (allSelected !== item.isAllDescendantsSelected || selected !== item.isSelected) {
							var selectedChange = item.isSelected !== selected;
							item.isAllDescendantsSelected = allSelected;
							item.isSelected = selected;
							view.updateItem(item.id, item);
							if (selectedChange) {
								this.itemSelectedChanged(item);
							}
						}
					}
				}
				finally {
					view.endUpdate();
				}
			},
			getDescendantsSelected: function(item) {
				return true;
			},
			$setAllSubTreeSelected: function(item, selected) {
				var result = false;
				for (var i = 0; i < item.children.length; i++) {
					var sub = item.children[i];
					if (sub.isSelected !== selected) {
						result = true;
						sub.isSelected = selected;
						this.view.updateItem(sub.id, sub);
						this.itemSelectedChanged(sub);
					}
					if (sub.children.length > 0) {
						result = this.$setAllSubTreeSelected(sub, selected) | result;
					}
				}
				return result;
			},
			$allItemsSelected: function() {
				for (var $t1 = 0; $t1 < this.view.rows.length; $t1++) {
					var row = this.view.rows[$t1];
					if (!row.isSelected) {
						return false;
					}
				}
				return this.view.rows.length > 0;
			},
			allDescendantsSelected: function(item) {
				if (item.children.length > 0) {
					for (var i = 0; i < item.children.length; i++) {
						var sub = item.children[i];
						if (!sub.isSelected) {
							return false;
						}
						if (!this.allDescendantsSelected(sub)) {
							return false;
						}
					}
				}
				return true;
			},
			anyDescendantsSelected: function(item) {
				if (item.children.length > 0) {
					for (var i = 0; i < item.children.length; i++) {
						var sub = item.children[i];
						if (sub.isSelected) {
							return true;
						}
						if (this.anyDescendantsSelected(sub)) {
							return true;
						}
					}
				}
				return false;
			},
			getColumns: function() {
				var self = this;
				var $t1 = [];
				$t1.push({ field: 'text', name: 'Kayıt', width: 80, format: Serenity.SlickFormatting.treeToggle(TItem).call(null, function() {
					return self.view;
				}, function(x) {
					return x.id;
				}, ss.mkdel(this, function(ctx) {
					var cls = 'check-box';
					var item = ss.cast(ctx.item, TItem);
					if (item.hideCheckBox) {
						return this.getItemText(ctx);
					}
					var threeState = this.isThreeStateHierarchy();
					if (item.isSelected) {
						if (threeState && !item.isAllDescendantsSelected) {
							cls += ' partial';
						}
						else {
							cls += ' checked';
						}
					}
					return '<span class="' + cls + '"></span>' + this.getItemText(ctx);
				})) });
				return $t1;
			},
			getItemText: function(ctx) {
				return Q.htmlEncode(ctx.value);
			},
			getSlickOptions: function() {
				var opt = ss.makeGenericType($Serenity_DataGrid$2, [TItem, TOptions]).prototype.getSlickOptions.call(this);
				opt.forceFitColumns = true;
				return opt;
			},
			sortItems: function() {
				if (!this.moveSelectedUp()) {
					return;
				}
				var oldIndexes = {};
				var list = this.view.getItems();
				var i = 0;
				for (var $t1 = 0; $t1 < list.length; $t1++) {
					var x = list[$t1];
					oldIndexes[x.id] = i++;
				}
				list.sort(function(x1, y) {
					if (x1.isSelected && !y.isSelected) {
						return -1;
					}
					if (y.isSelected && !x1.isSelected) {
						return 1;
					}
					var c = Q$Externals.turkishLocaleCompare(x1.text, y.text);
					if (c !== 0) {
						return c;
					}
					return ss.compare(oldIndexes[x1.id], oldIndexes[y.id]);
				});
				this.view.setItems(list, true);
			},
			moveSelectedUp: function() {
				return false;
			},
			get_value: function() {
				var list = [];
				var items = this.get_view().getItems();
				for (var i = 0; i < items.length; i++) {
					if (items[i].isSelected) {
						list.push(items[i].id);
					}
				}
				return list;
			},
			set_value: function(value) {
				var selected = {};
				if (ss.isValue(value)) {
					for (var i = 0; i < value.length; i++) {
						selected[value[i]] = true;
					}
				}
				this.view.beginUpdate();
				try {
					var items = this.get_view().getItems();
					for (var i1 = 0; i1 < items.length; i1++) {
						var item = items[i1];
						var select = selected[item.id];
						if (select !== item.isSelected) {
							item.isSelected = select;
							this.view.updateItem(item.id, item);
						}
					}
					this.updateSelectAll();
					this.updateFlags();
					this.sortItems();
				}
				finally {
					this.view.endUpdate();
				}
			}
		}, function() {
			return ss.makeGenericType($Serenity_DataGrid$2, [TItem, TOptions]);
		}, function() {
			return [$Serenity_IDataGrid, $Serenity_IGetEditValue, $Serenity_ISetEditValue];
		});
		ss.setMetadata($type, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.IdPropertyAttribute('id')] });
		return $type;
	};
	$Serenity_CheckTreeEditor$2.__typeName = 'Serenity.CheckTreeEditor$2';
	ss.initGenericClass($Serenity_CheckTreeEditor$2, $asm, 2);
	global.Serenity.CheckTreeEditor$2 = $Serenity_CheckTreeEditor$2;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.CustomValidation
	var $Serenity_CustomValidation = function() {
	};
	$Serenity_CustomValidation.__typeName = 'Serenity.CustomValidation';
	$Serenity_CustomValidation.registerValidationMethods = function() {
		if (ss.staticEquals($.validator.methods['customValidate'], null)) {
			$.validator.addMethod('customValidate', function(value, element) {
				var result = this.optional(element);
				if (ss.isNullOrUndefined(element) || !!result) {
					return result;
				}
				var events = $._data(element, 'events');
				if (!!ss.isNullOrUndefined(events)) {
					return true;
				}
				var handlers = events.customValidate;
				if (!!(ss.isNullOrUndefined(handlers) || ss.referenceEquals(handlers.length, 0))) {
					return true;
				}
				var el = $(element);
				for (var i = 0; !!(i < handlers.length); i++) {
					var handler = ss.safeCast(handlers[i].handler, Function);
					if (!ss.staticEquals(handler, null)) {
						var message = handler(el);
						if (ss.isValue(message)) {
							el.data('customValidationMessage', message);
							return false;
						}
					}
				}
				return true;
			}, function(o, e) {
				return $(e).data('customValidationMessage');
			});
		}
	};
	global.Serenity.CustomValidation = $Serenity_CustomValidation;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DataGrid
	var $Serenity_DataGrid$1 = function(TItem) {
		var $type = function(container) {
			ss.makeGenericType($Serenity_DataGrid$2, [TItem, Object]).call(this, container, null);
		};
		ss.registerGenericClassInstance($type, $Serenity_DataGrid$1, [TItem], {}, function() {
			return ss.makeGenericType($Serenity_DataGrid$2, [TItem, Object]);
		}, function() {
			return [$Serenity_IDataGrid];
		});
		return $type;
	};
	$Serenity_DataGrid$1.__typeName = 'Serenity.DataGrid$1';
	ss.initGenericClass($Serenity_DataGrid$1, $asm, 1);
	global.Serenity.DataGrid$1 = $Serenity_DataGrid$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DataGrid
	var $Serenity_DataGrid$2 = function(TItem, TOptions) {
		var $type = function(container, opt) {
			this.titleDiv = null;
			this.toolbar = null;
			this.filterBar = null;
			this.view = null;
			this.slickContainer = null;
			this.slickGrid = null;
			this.idFieldName = null;
			this.isActiveFieldName = null;
			this.localTextPrefix = null;
			this.$isDisabled = false;
			this.$slickGridOnSort = null;
			this.$slickGridOnClick = null;
			ss.makeGenericType($Serenity_Widget$1, [TOptions]).call(this, container, opt);
			var self = this;
			this.element.addClass('s-DataGrid').html('');
			this.element.addClass('s-' + ss.getTypeName(ss.getInstanceType(this)));
			this.element.addClass('require-layout').bind('layout', function() {
				self.layout();
			});
			this.set_title(this.getInitialTitle());
			var buttons = this.getButtons();
			if (ss.isValue(buttons)) {
				this.createToolbar(buttons);
			}
			this.slickContainer = this.createSlickContainer();
			this.view = this.createView();
			this.slickGrid = this.createSlickGrid();
			if (this.enableFiltering()) {
				this.createFilterBar();
			}
			if (this.usePager()) {
				this.createPager();
			}
			this.bindToSlickEvents();
			this.bindToViewEvents();
			if (ss.isValue(buttons)) {
				this.createToolbarExtensions();
			}
			this.updateDisabledState();
			if (!this.isAsyncWidget()) {
				this.initialPopulate();
			}
		};
		ss.registerGenericClassInstance($type, $Serenity_DataGrid$2, [TItem, TOptions], {
			layout: function() {
				if (!this.element.is(':visible')) {
					return;
				}
				if (ss.isNullOrUndefined(this.slickContainer)) {
					return;
				}
				Q.layoutFillHeight(this.slickContainer);
				if (ss.isValue(this.slickGrid)) {
					this.slickGrid.resizeCanvas();
				}
			},
			getInitialTitle: function() {
				return null;
			},
			createToolbarExtensions: function() {
			},
			createIncludeDeletedButton: function() {
				if (!Q.isEmptyOrNull(this.getIsActiveFieldName())) {
					$Serenity_GridUtils.addIncludeDeletedToggle(this.toolbar.get_element(), this.view, null, false);
				}
			},
			getQuickSearchFields: function() {
				return null;
			},
			createQuickSearchInput: function() {
				$Serenity_GridUtils.addQuickSearchInput(TItem).call(null, this.toolbar.get_element(), this.view, this.getQuickSearchFields());
			},
			destroy: function() {
				if (ss.isValue(this.toolbar)) {
					this.toolbar.destroy();
					this.toolbar = null;
				}
				if (ss.isValue(this.slickGrid)) {
					if (!ss.staticEquals(this.$slickGridOnSort, null)) {
						this.slickGrid.onSort.unsubscribe(this.$slickGridOnSort);
						this.$slickGridOnSort = null;
					}
					if (!ss.staticEquals(this.$slickGridOnClick, null)) {
						this.slickGrid.onSort.unsubscribe(this.$slickGridOnClick);
						this.$slickGridOnClick = null;
					}
					this.slickGrid.destroy();
					this.slickGrid = null;
				}
				if (ss.isValue(this.view)) {
					this.view.onRowsChanged.clear();
					this.view.onRowCountChanged.clear();
					this.view.onSubmit = null;
					this.view.setFilter(null);
					var viewRows = this.view.rows;
					if (!!ss.isValue(viewRows)) {
						viewRows.getItemMetadata = null;
					}
					this.view = null;
				}
				this.titleDiv = null;
				$Serenity_Widget.prototype.destroy.call(this);
			},
			getItemCssClass: function(item, index) {
				var activeFieldName = this.getIsActiveFieldName();
				if (Q.isEmptyOrNull(activeFieldName)) {
					return null;
				}
				var value = item[activeFieldName];
				if (ss.isNullOrUndefined(value)) {
					return null;
				}
				if (typeof(value) === 'number') {
					if (Serenity.IdExtensions.isNegativeId(value)) {
						return 'deleted';
					}
					else if (value === 0) {
						return 'inactive';
					}
				}
				else if (typeof(value) === 'boolean') {
					if (value === false) {
						return 'deleted';
					}
				}
				return null;
			},
			getItemMetadata: function(item, index) {
				var itemClass = this.getItemCssClass(item, index);
				if (Q.isEmptyOrNull(itemClass)) {
					return new Object();
				}
				return { cssClasses: itemClass };
			},
			postProcessColumns: function(columns) {
				Serenity.SlickHelper.setDefaults(columns, this.getLocalTextPrefix());
				return columns;
			},
			initialPopulate: function() {
				var self = this;
				if (this.populateWhenVisible()) {
					Serenity.LazyLoadHelper.executeEverytimeWhenShown(this.element, function() {
						self.$refreshIfNeeded();
					}, false);
					if (this.element.is(':visible')) {
						this.view.populate();
					}
				}
				else {
					this.view.populate();
				}
			},
			initializeAsync: function() {
				return $Serenity_Widget.prototype.initializeAsync.call(this).then(ss.mkdel(this, this.getColumnsAsync), null).then(ss.mkdel(this, function(columns) {
					columns = this.postProcessColumns(columns);
					var self = this;
					if (ss.isValue(this.filterBar)) {
						this.filterBar.set_store(new $Serenity_FilterStore(Enumerable.from(this.getPropertyItems()).where(function(x) {
							return x.notFilterable !== true;
						})));
						this.filterBar.get_store().add_changed(function(s, e) {
							self.refresh();
						});
					}
					if (ss.isValue(this.slickGrid)) {
						this.slickGrid.setColumns(columns);
					}
					this.setInitialSortOrder();
					this.initialPopulate();
				}), null);
			},
			createSlickGrid: function() {
				var slickColumns;
				if (this.isAsyncWidget()) {
					slickColumns = [];
				}
				else {
					slickColumns = this.postProcessColumns(this.getColumns());
				}
				var slickOptions = this.getSlickOptions();
				var self = this;
				var viewRows = this.view.rows;
				viewRows.getItemMetadata = function(index) {
					var item = self.view.rows[index];
					return self.getItemMetadata(item, index);
				};
				var grid = new Slick.Grid(this.slickContainer, ss.cast(viewRows, Array), slickColumns, slickOptions);
				grid.registerPlugin(new Slick.AutoTooltips({ enableForHeaderCells: true }));
				this.slickGrid = grid;
				if (!this.isAsyncWidget()) {
					this.setInitialSortOrder();
				}
				return grid;
			},
			setInitialSortOrder: function() {
				var sortBy = this.getDefaultSortBy();
				if (ss.isValue(this.view)) {
					this.view.sortBy = Array.prototype.slice.call(sortBy);
				}
				var mapped = sortBy.map(function(s) {
					var x = {};
					if (ss.isValue(s) && ss.endsWithString(s.toLowerCase(), ' desc')) {
						x.columnId = ss.trimEndString(s.substr(0, s.length - 5));
						x.sortAsc = false;
					}
					else {
						x.columnId = s;
						x.sortAsc = true;
					}
					return x;
				});
				this.slickGrid.setSortColumns(mapped);
			},
			get_items: function() {
				return this.view.getItems();
			},
			set_items: function(value) {
				this.view.setItems(value, true);
			},
			bindToSlickEvents: function() {
				var self = this;
				this.$slickGridOnSort = function(e, p) {
					self.view.populateLock();
					try {
						var sortBy = [];
						if (!!p.multiColumnSort) {
							for (var i = 0; !!(i < p.sortCols.length); i++) {
								var x = p.sortCols[i];
								var $t1 = x.sortCol;
								if (ss.isNullOrUndefined($t1)) {
									$t1 = {};
								}
								var col = $t1;
								sortBy.push(ss.cast(col.field + (!!x.sortAsc ? '' : ' DESC'), String));
							}
						}
						else {
							var $t2 = p.sortCol;
							if (ss.isNullOrUndefined($t2)) {
								$t2 = {};
							}
							var col1 = $t2;
							sortBy.push(ss.cast(col1.field + (!!p.sortAsc ? '' : ' DESC'), String));
						}
						self.view.sortBy = sortBy;
					}
					finally {
						self.view.populateUnlock();
					}
					self.view.populate();
				};
				this.slickGrid.onSort.subscribe(this.$slickGridOnSort);
				this.$slickGridOnClick = function(e1, p1) {
					self.onClick(e1, ss.unbox(ss.cast(p1.row, ss.Int32)), ss.unbox(ss.cast(p1.cell, ss.Int32)));
				};
				this.slickGrid.onClick.subscribe(this.$slickGridOnClick);
			},
			getAddButtonCaption: function() {
				return 'Yeni';
			},
			getButtons: function() {
				return [];
			},
			editItem: function(entityOrId) {
				throw new ss.NotImplementedException();
			},
			editItem$1: function(itemType, entityOrId) {
				if (ss.referenceEquals(itemType, this.getItemType())) {
					this.editItem(entityOrId);
					return;
				}
				throw new ss.NotImplementedException();
			},
			onClick: function(e, row, cell) {
				if (e.isDefaultPrevented()) {
					return;
				}
				var target = $(e.target);
				if (!target.hasClass('s-EditLink')) {
					target = target.closest('a');
				}
				if (target.hasClass('s-EditLink')) {
					e.preventDefault();
					this.editItem$1(Serenity.SlickFormatting.getItemType$1(target), Serenity.SlickFormatting.getItemId$1(target));
				}
			},
			$viewRowCountChanged: function(e, d) {
				this.slickGrid.updateRowCount();
				this.slickGrid.render();
			},
			$viewRowsChanged: function(e, rows) {
				if (!!ss.isNullOrUndefined(rows)) {
					this.slickGrid.invalidate();
					this.markupReady();
				}
				else {
					this.slickGrid.invalidate();
					this.slickGrid.render();
				}
			},
			bindToViewEvents: function() {
				var self = this;
				this.view.onRowCountChanged.subscribe(function(e, d) {
					self.$viewRowCountChanged(e, d);
				});
				this.view.onRowsChanged.subscribe(function(e1, d1) {
					self.$viewRowsChanged(e1, d1);
				});
				this.view.onSubmit = function(view) {
					return self.onViewSubmit();
				};
				this.view.setFilter(function(item, view1) {
					return self.onViewFilter(item);
				});
				this.view.onProcessData = function(response, view2) {
					return self.onViewProcessData(response);
				};
			},
			onViewProcessData: function(response) {
				return response;
			},
			onViewFilter: function(item) {
				return true;
			},
			getIncludeColumns: function(include) {
				var $t1 = this.slickGrid.getColumns();
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var column = $t1[$t2];
					if (ss.isValue(column.field)) {
						include[column.field] = true;
					}
					if (ss.isValue(column.referencedFields)) {
						for (var $t3 = 0; $t3 < column.referencedFields.length; $t3++) {
							var x = column.referencedFields[$t3];
							include[x] = true;
						}
					}
				}
			},
			setCriteriaParameter: function() {
				this.view.params.Criteria = null;
				if (ss.isValue(this.filterBar)) {
					var criteria = this.filterBar.get_store().get_activeCriteria();
					if (!Serenity.Criteria.isEmpty(criteria)) {
						this.view.params.Criteria = criteria;
					}
				}
			},
			setIncludeColumnsParameter: function() {
				var include = {};
				if (!!!ss.isNullOrUndefined(this.view.params.IncludeColumns)) {
					var $t1 = ss.cast(this.view.params.IncludeColumns, Array);
					for (var $t2 = 0; $t2 < $t1.length; $t2++) {
						var key = $t1[$t2];
						include[key] = true;
					}
				}
				this.getIncludeColumns(include);
				var array = null;
				if (ss.getKeyCount(include) > 0) {
					array = [];
					var $t3 = ss.getEnumerator(Object.keys(include));
					try {
						while ($t3.moveNext()) {
							var key1 = $t3.current();
							array.push(key1);
						}
					}
					finally {
						$t3.dispose();
					}
				}
				this.view.params.IncludeColumns = array;
			},
			onViewSubmit: function() {
				if (this.get_isDisabled() || !this.getGridCanLoad()) {
					//view.SetItems(new List<TItem>(), true);
					return false;
				}
				this.setCriteriaParameter();
				this.setIncludeColumnsParameter();
				return true;
			},
			markupReady: function() {
			},
			createSlickContainer: function() {
				return $('<div class="grid-container"></div>').appendTo(this.element);
			},
			createView: function() {
				var opt = this.getViewOptions();
				return new Slick.Data.RemoteView(opt);
			},
			getDefaultSortBy: function() {
				if (ss.isValue(this.slickGrid) && this.slickGrid.getColumns().length > 0) {
					var columns = Enumerable.from(this.slickGrid.getColumns()).where(function(x) {
						return ss.isValue(x.sortOrder) && x.sortOrder !== 0;
					}).toArray();
					if (columns.length > 0) {
						columns.sort(function(x1, y) {
							return ss.compare(Math.abs(x1.sortOrder), Math.abs(y.sortOrder));
						});
						var list = [];
						for (var i = 0; i < columns.length; i++) {
							var col = columns[i];
							list.push(col.field + ((col.sortOrder < 0) ? ' DESC' : ''));
						}
						return list;
					}
				}
				return [];
			},
			usePager: function() {
				return false;
			},
			enableFiltering: function() {
				var attr = ss.getAttributes(ss.getInstanceType(this), $Serenity_FilterableAttribute, true);
				return attr.length > 0 && attr[0].get_value();
			},
			populateWhenVisible: function() {
				return false;
			},
			createFilterBar: function() {
				var filterBarDiv = $('<div/>').appendTo(this.element);
				var self = this;
				this.filterBar = new $Serenity_FilterDisplayBar(filterBarDiv);
				if (!this.isAsyncWidget()) {
					this.filterBar.set_store(new $Serenity_FilterStore(Enumerable.from(this.getPropertyItems()).where(function(x) {
						return x.notFilterable !== true;
					})));
					this.filterBar.get_store().add_changed(function(s, e) {
						self.refresh();
					});
				}
			},
			createPager: function() {
				var pagerDiv = $('<div></div>').appendTo(this.element);
				pagerDiv.slickPager({ view: this.view, rowsPerPage: 20, rowsPerPageOptions: [20, 100, 500, 2500] });
			},
			getViewOptions: function() {
				var opt = {};
				opt.idField = this.getIdFieldName();
				opt.sortBy = this.getDefaultSortBy();
				if (!this.usePager()) {
					opt.rowsPerPage = 0;
				}
				else {
					opt.rowsPerPage = 100;
				}
				return opt;
			},
			createToolbar: function(buttons) {
				var toolbarDiv = $('<div class="grid-toolbar"></div>').appendTo(this.get_element());
				this.toolbar = new $Serenity_Toolbar(toolbarDiv, { buttons: buttons });
			},
			get_title: function() {
				if (ss.isNullOrUndefined(this.titleDiv)) {
					return null;
				}
				return this.titleDiv.children().text();
			},
			set_title: function(value) {
				if (!ss.referenceEquals(value, this.get_title())) {
					if (ss.isNullOrUndefined(value)) {
						if (ss.isValue(this.titleDiv)) {
							this.titleDiv.remove();
							this.titleDiv = null;
						}
					}
					else if (ss.isNullOrUndefined(this.titleDiv)) {
						this.titleDiv = $('<div class="grid-title"><div class="title-text"></div></div>').prependTo(this.get_element());
						this.titleDiv.children().text(value);
					}
					this.layout();
				}
			},
			getItemType: function() {
				return 'Item';
			},
			itemLink: function(itemType, idField, text, cssClass, encode) {
				var $t1 = itemType;
				if (ss.isNullOrUndefined($t1)) {
					$t1 = this.getItemType();
				}
				itemType = $t1;
				var $t2 = idField;
				if (ss.isNullOrUndefined($t2)) {
					$t2 = this.getIdFieldName();
				}
				idField = $t2;
				return Serenity.SlickFormatting.itemLink(itemType, idField, text, cssClass, encode);
			},
			getPropertyItemsAsync: function() {
				return RSVP.resolve().then(ss.mkdel(this, function() {
					var attr = ss.getAttributes(ss.getInstanceType(this), Serenity.ColumnsKeyAttribute, true);
					if (ss.isValue(attr) && attr.length > 0) {
						return Q.getColumnsAsync(attr[0].get_value());
					}
					return RSVP.resolve([]);
				}), null);
			},
			getPropertyItems: function() {
				var attr = ss.getAttributes(ss.getInstanceType(this), Serenity.ColumnsKeyAttribute, true);
				if (ss.isValue(attr) && attr.length > 0) {
					return Q.getColumns(attr[0].get_value());
				}
				return [];
			},
			getColumns: function() {
				var columnItems = Enumerable.from(this.getPropertyItems()).where(function(x) {
					return x.filterOnly !== true && x.visible !== false;
				}).toArray();
				return this.propertyItemsToSlickColumns(columnItems);
			},
			propertyItemsToSlickColumns: function(propertyItems) {
				var columns = $Serenity_PropertyItemSlickConverter.toSlickColumns(propertyItems);
				if (ss.isValue(propertyItems)) {
					for (var i = 0; i < propertyItems.length; i++) {
						var item = propertyItems[i];
						var column = columns[i];
						if (item.editLink) {
							var oldFormat = { $: column.format };
							var css = { $: (ss.isValue(item.editLinkCssClass) ? item.editLinkCssClass : null) };
							column.format = this.itemLink((ss.isValue(item.editLinkItemType) ? item.editLinkItemType : null), (ss.isValue(item.editLinkIdField) ? item.editLinkIdField : null), ss.mkdel({ oldFormat: oldFormat }, function(ctx) {
								if (!ss.staticEquals(this.oldFormat.$, null)) {
									return this.oldFormat.$(ctx);
								}
								return Q.htmlEncode(ctx.value);
							}), ss.mkdel({ css: css }, function(ctx1) {
								return ss.coalesce(this.css.$, '');
							}), false);
							if (!ss.isNullOrEmptyString(item.editLinkIdField)) {
								column.referencedFields = column.referencedFields || [];
								column.referencedFields.push(item.editLinkIdField);
							}
						}
					}
				}
				return columns;
			},
			getColumnsAsync: function() {
				return this.getPropertyItemsAsync().then(ss.mkdel(this, function(propertyItems) {
					return this.propertyItemsToSlickColumns(Enumerable.from(propertyItems).where(function(x) {
						return x.filterOnly !== true && x.visible !== false;
					}).toArray());
				}), null);
			},
			getSlickOptions: function() {
				var opt = {};
				opt.multiSelect = false;
				opt.multiColumnSort = true;
				opt.enableCellNavigation = false;
				opt.headerRowHeight = 30;
				opt.rowHeight = 27;
				return opt;
			},
			populateLock: function() {
				this.view.populateLock();
			},
			populateUnlock: function() {
				this.view.populateUnlock();
			},
			getGridCanLoad: function() {
				return true;
			},
			refresh: function() {
				if (!this.populateWhenVisible()) {
					this.internalRefresh();
					return;
				}
				if (this.slickContainer.is(':visible')) {
					this.slickContainer.data('needsRefresh', false);
					this.internalRefresh();
					return;
				}
				this.slickContainer.data('needsRefresh', true);
			},
			$refreshIfNeeded: function() {
				if (!!this.slickContainer.data('needsRefresh')) {
					this.slickContainer.data('needsRefresh', false);
					this.internalRefresh();
				}
			},
			internalRefresh: function() {
				this.view.populate();
			},
			get_isDisabled: function() {
				return this.$isDisabled;
			},
			set_isDisabled: function(value) {
				if (this.$isDisabled !== value) {
					this.$isDisabled = value;
					if (this.$isDisabled) {
						this.view.setItems([], true);
					}
					this.updateDisabledState();
				}
			},
			getLocalTextPrefix: function() {
				if (ss.isNullOrUndefined(this.localTextPrefix)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.LocalTextPrefixAttribute, true);
					if (attributes.length >= 1) {
						this.localTextPrefix = attributes[0].get_value();
					}
					else {
						this.localTextPrefix = '';
					}
				}
				return this.localTextPrefix;
			},
			getIdFieldName: function() {
				if (ss.isNullOrUndefined(this.idFieldName)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.IdPropertyAttribute, true);
					if (attributes.length === 1) {
						this.idFieldName = attributes[0].get_value();
					}
					else {
						this.idFieldName = 'ID';
					}
				}
				return this.idFieldName;
			},
			getIsActiveFieldName: function() {
				if (ss.isNullOrUndefined(this.isActiveFieldName)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.IsActivePropertyAttribute, true);
					if (attributes.length === 1) {
						this.isActiveFieldName = attributes[0].get_value();
					}
					else {
						this.isActiveFieldName = '';
					}
				}
				return this.isActiveFieldName;
			},
			updateDisabledState: function() {
				this.slickContainer.toggleClass('ui-state-disabled', !!this.get_isDisabled());
			},
			resizeCanvas: function() {
				this.slickGrid.resizeCanvas();
			},
			subDialogDataChange: function() {
				this.refresh();
			},
			get_view: function() {
				return this.view;
			},
			get_slickGrid: function() {
				return this.slickGrid;
			},
			getElement: function() {
				return this.element;
			},
			getGrid: function() {
				return this.slickGrid;
			},
			getView: function() {
				return this.view;
			},
			getFilterStore: function() {
				return (ss.isNullOrUndefined(this.filterBar) ? null : this.filterBar.get_store());
			}
		}, function() {
			return ss.makeGenericType($Serenity_Widget$1, [TOptions]);
		}, function() {
			return [$Serenity_IDataGrid];
		});
		return $type;
	};
	$Serenity_DataGrid$2.__typeName = 'Serenity.DataGrid$2';
	ss.initGenericClass($Serenity_DataGrid$2, $asm, 2);
	global.Serenity.DataGrid$2 = $Serenity_DataGrid$2;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DateEditor
	var $Serenity_DateEditor = function(input) {
		this.$4$MinValueField = null;
		this.$4$MaxValueField = null;
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, input, new Object());
		input.addClass('dateQ');
		input.datepicker({
			showOn: 'button',
			beforeShow: function() {
				return !input.hasClass('readonly');
			}
		});
		input.bind('keyup.' + this.uniqueName, $Serenity_DateEditor.dateInputKeyup);
		input.bind('change.' + this.uniqueName, $Serenity_DateEditor.dateInputChange);
		$Serenity_VX.addValidationRule$1(input, this.uniqueName, ss.mkdel(this, function(e) {
			var value = this.get_value();
			if (ss.isNullOrEmptyString(value)) {
				return null;
			}
			if (!ss.isNullOrEmptyString(this.get_minValue()) && ss.compareStrings(value, this.get_minValue()) < 0) {
				return ss.formatString(Q.text('Validation.MinDate'), Q.formatDate(Q.parseISODateTime(this.get_minValue()), null));
			}
			if (!ss.isNullOrEmptyString(this.get_maxValue()) && ss.compareStrings(value, this.get_maxValue()) >= 0) {
				return ss.formatString(Q.text('Validation.MaxDate'), Q.formatDate(Q.parseISODateTime(this.get_maxValue()), null));
			}
			return null;
		}));
		this.set_sqlMinMax(true);
	};
	$Serenity_DateEditor.__typeName = 'Serenity.DateEditor';
	$Serenity_DateEditor.dateInputChange = function(e) {
		if (Q$Culture.dateOrder !== 'dmy') {
			return;
		}
		var input = $(e.target);
		if (!input.is(':input')) {
			return;
		}
		var val = ss.coalesce(input.val(), '');
		var x = {};
		if (val.length >= 6 && ss.Int32.tryParse(val, x)) {
			input.val(val.substr(0, 2) + Q$Culture.dateSeparator + val.substr(2, 2) + Q$Culture.dateSeparator + val.substr(4));
		}
		val = ss.coalesce(input.val(), '');
		if (!!(val.length >= 5 && !ss.referenceEquals(Q.parseDate(val), false))) {
			var d = Q.parseDate(val);
			input.val(Q.formatDate(d, null));
		}
	};
	$Serenity_DateEditor.dateInputKeyup = function(e) {
		if (Q$Culture.dateOrder !== 'dmy') {
			return;
		}
		var input = $(e.target);
		if (!input.is(':input')) {
			return;
		}
		var val = ss.coalesce(input.val(), '');
		if (!!(val.length === 0 || !ss.referenceEquals(input[0].selectionEnd, val.length))) {
			return;
		}
		if (val.indexOf(Q$Culture.dateSeparator + Q$Culture.dateSeparator) !== -1) {
			input.val(ss.replaceAllString(val, Q$Culture.dateSeparator + Q$Culture.dateSeparator, Q$Culture.dateSeparator));
			return;
		}
		if (e.which === 47 || e.which === 111) {
			if (val.length >= 2 && ss.referenceEquals(String.fromCharCode(val.charCodeAt(val.length - 1)), Q$Culture.dateSeparator) && ss.referenceEquals(String.fromCharCode(val.charCodeAt(val.length - 2)), Q$Culture.dateSeparator)) {
				input.val(val.substr(0, val.length - 1));
				return;
			}
			if (!ss.referenceEquals(String.fromCharCode(val.charCodeAt(val.length - 1)), Q$Culture.dateSeparator)) {
				return;
			}
			switch (val.length) {
				case 2: {
					if ($Serenity_DateEditor.$isNumeric(val.charCodeAt(0))) {
						val = '0' + val;
						break;
					}
					else {
						return;
					}
				}
				case 4: {
					if ($Serenity_DateEditor.$isNumeric(val.charCodeAt(0)) && $Serenity_DateEditor.$isNumeric(val.charCodeAt(2)) && ss.referenceEquals(String.fromCharCode(val.charCodeAt(1)), Q$Culture.dateSeparator)) {
						val = '0' + String.fromCharCode(val.charCodeAt(0)) + Q$Culture.dateSeparator + '0' + String.fromCharCode(val.charCodeAt(2)) + Q$Culture.dateSeparator;
						break;
					}
					else {
						return;
					}
				}
				case 5: {
					if ($Serenity_DateEditor.$isNumeric(val.charCodeAt(0)) && $Serenity_DateEditor.$isNumeric(val.charCodeAt(2)) && $Serenity_DateEditor.$isNumeric(val.charCodeAt(3)) && ss.referenceEquals(String.fromCharCode(val.charCodeAt(1)), Q$Culture.dateSeparator)) {
						val = '0' + val;
						break;
					}
					else if ($Serenity_DateEditor.$isNumeric(val.charCodeAt(0)) && $Serenity_DateEditor.$isNumeric(val.charCodeAt(1)) && $Serenity_DateEditor.$isNumeric(val.charCodeAt(3)) && ss.referenceEquals(String.fromCharCode(val.charCodeAt(2)), Q$Culture.dateSeparator)) {
						val = String.fromCharCode(val.charCodeAt(0)) + String.fromCharCode(val.charCodeAt(1)) + Q$Culture.dateSeparator + '0' + String.fromCharCode(val.charCodeAt(3)) + Q$Culture.dateSeparator;
						break;
					}
					else {
						break;
					}
				}
				default: {
					return;
				}
			}
			input.val(val);
		}
		if (val.length < 6 && (e.which >= 48 && e.which <= 57 || e.which >= 96 && e.which <= 105) && $Serenity_DateEditor.$isNumeric(val.charCodeAt(val.length - 1))) {
			switch (val.length) {
				case 1: {
					if (val.charCodeAt(0) <= 51) {
						return;
					}
					val = '0' + val;
					break;
				}
				case 2: {
					if (!$Serenity_DateEditor.$isNumeric(val.charCodeAt(0))) {
						return;
					}
					break;
				}
				case 3: {
					if (!$Serenity_DateEditor.$isNumeric(val.charCodeAt(0)) || !ss.referenceEquals(String.fromCharCode(val.charCodeAt(1)), Q$Culture.dateSeparator) || val.charCodeAt(2) <= 49) {
						return;
					}
					val = '0' + String.fromCharCode(val.charCodeAt(0)) + Q$Culture.dateSeparator + '0' + String.fromCharCode(val.charCodeAt(2));
					break;
				}
				case 4: {
					if (ss.referenceEquals(String.fromCharCode(val.charCodeAt(1)), Q$Culture.dateSeparator)) {
						if (!$Serenity_DateEditor.$isNumeric(val.charCodeAt(0)) || !$Serenity_DateEditor.$isNumeric(val.charCodeAt(2))) {
							return;
						}
						val = '0' + val;
						break;
					}
					else if (ss.referenceEquals(String.fromCharCode(val.charCodeAt(2)), Q$Culture.dateSeparator)) {
						if (!$Serenity_DateEditor.$isNumeric(val.charCodeAt(0)) || !$Serenity_DateEditor.$isNumeric(val.charCodeAt(1)) || val.charCodeAt(3) <= 49) {
							return;
						}
						val = String.fromCharCode(val.charCodeAt(0)) + String.fromCharCode(val.charCodeAt(1)) + Q$Culture.dateSeparator + '0' + String.fromCharCode(val.charCodeAt(3));
						break;
					}
					else {
						return;
					}
				}
				case 5: {
					if (!ss.referenceEquals(String.fromCharCode(val.charCodeAt(2)), Q$Culture.dateSeparator) || !$Serenity_DateEditor.$isNumeric(val.charCodeAt(0)) || !$Serenity_DateEditor.$isNumeric(val.charCodeAt(1)) || !$Serenity_DateEditor.$isNumeric(val.charCodeAt(3))) {
						return;
					}
					break;
				}
				default: {
					return;
				}
			}
			input.val(val + Q$Culture.dateSeparator);
		}
	};
	$Serenity_DateEditor.$isNumeric = function(c) {
		return c >= 48 && c <= 57;
	};
	$Serenity_DateEditor.defaultAutoNumericOptions = function() {
		return { aDec: Q$Culture.decimalSeparator, altDec: ((Q$Culture.decimalSeparator === '.') ? ',' : '.'), aSep: ((Q$Culture.decimalSeparator === '.') ? ',' : '.'), aPad: true };
	};
	global.Serenity.DateEditor = $Serenity_DateEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DateFiltering
	var $Serenity_DateFiltering = function() {
		ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_DateEditor]).call(this);
	};
	$Serenity_DateFiltering.__typeName = 'Serenity.DateFiltering';
	global.Serenity.DateFiltering = $Serenity_DateFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DateTimeEditor
	var $Serenity_DateTimeEditor = function(input, opt) {
		this.$time = null;
		this.$4$MinValueField = null;
		this.$4$MaxValueField = null;
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, input, opt);
		input.addClass('dateQ s-DateTimeEditor').datepicker({ showOn: 'button' });
		input.bind('keyup.' + this.uniqueName, $Serenity_DateEditor.dateInputKeyup);
		input.bind('change.' + this.uniqueName, $Serenity_DateEditor.dateInputChange);
		this.$time = $('<select/>').addClass('editor s-DateTimeEditor time').insertAfter(input.next('.ui-datepicker-trigger'));
		var $t1 = $Serenity_DateTimeEditor.$getTimeOptions(ss.coalesce(this.options.startHour, 0), 0, ss.coalesce(this.options.endHour, 23), 59, ss.coalesce(this.options.intervalMinutes, 30));
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var t = $t1[$t2];
			Q.addOption(this.$time, t, t);
		}
		$Serenity_VX.addValidationRule$1(input, this.uniqueName, ss.mkdel(this, function(e) {
			var value = this.get_value();
			if (ss.isNullOrEmptyString(value)) {
				return null;
			}
			if (!ss.isNullOrEmptyString(this.get_minValue()) && ss.compareStrings(value, this.get_minValue()) < 0) {
				return ss.formatString(Q.text('Validation.MinDate'), Q.formatDate(Q.parseISODateTime(this.get_minValue()), null));
			}
			if (!ss.isNullOrEmptyString(this.get_maxValue()) && ss.compareStrings(value, this.get_maxValue()) >= 0) {
				return ss.formatString(Q.text('Validation.MaxDate'), Q.formatDate(Q.parseISODateTime(this.get_maxValue()), null));
			}
			return null;
		}));
	};
	$Serenity_DateTimeEditor.__typeName = 'Serenity.DateTimeEditor';
	$Serenity_DateTimeEditor.$getTimeOptions = function(fromHour, fromMin, toHour, toMin, stepMins) {
		var list = [];
		if (toHour >= 23) {
			toHour = 23;
		}
		if (toMin >= 60) {
			toMin = 59;
		}
		var hour = fromHour;
		var min = fromMin;
		while (true) {
			if (hour > toHour || hour === toHour && min > toMin) {
				break;
			}
			var t = ((hour >= 10) ? '' : '0') + hour + ':' + ((min >= 10) ? '' : '0') + min;
			list.push(t);
			min += stepMins;
			if (min >= 60) {
				min -= 60;
				hour++;
			}
		}
		return list;
	};
	global.Serenity.DateTimeEditor = $Serenity_DateTimeEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DateTimeFiltering
	var $Serenity_DateTimeFiltering = function() {
		ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_DateEditor]).call(this);
	};
	$Serenity_DateTimeFiltering.__typeName = 'Serenity.DateTimeFiltering';
	global.Serenity.DateTimeFiltering = $Serenity_DateTimeFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DateYearEditor
	var $Serenity_DateYearEditor = function(hidden, opt) {
		$Serenity_SelectEditor.call(this, hidden, opt);
		this.updateItems();
	};
	$Serenity_DateYearEditor.__typeName = 'Serenity.DateYearEditor';
	global.Serenity.DateYearEditor = $Serenity_DateYearEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DateYearEditorOptions
	var $Serenity_DateYearEditorOptions = function() {
	};
	$Serenity_DateYearEditorOptions.__typeName = 'Serenity.DateYearEditorOptions';
	$Serenity_DateYearEditorOptions.createInstance = function() {
		return $Serenity_DateYearEditorOptions.$ctor();
	};
	$Serenity_DateYearEditorOptions.$ctor = function() {
		var $this = $Serenity_SelectEditorOptions.$ctor();
		$this.minYear = null;
		$this.maxYear = null;
		$this.descending = false;
		$this.minYear = '-10';
		$this.maxYear = '+0';
		return $this;
	};
	global.Serenity.DateYearEditorOptions = $Serenity_DateYearEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DecimalEditor
	var $Serenity_DecimalEditor = function(input, opt) {
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_DecimalEditorOptions]).call(this, input, opt);
		input.addClass('decimalQ');
		var numericOptions = $.extend($Serenity_DecimalEditor.defaultAutoNumericOptions(), { vMin: this.options.minValue, vMax: this.options.maxValue });
		if (ss.isValue(this.options.decimals)) {
			numericOptions.mDec = ss.unbox(this.options.decimals);
		}
		if (ss.isValue(this.options.padDecimals)) {
			numericOptions.aPad = ss.unbox(this.options.padDecimals);
		}
		input.autoNumeric(numericOptions);
	};
	$Serenity_DecimalEditor.__typeName = 'Serenity.DecimalEditor';
	$Serenity_DecimalEditor.defaultAutoNumericOptions = function() {
		return { aDec: Q$Culture.decimalSeparator, altDec: ((Q$Culture.decimalSeparator === '.') ? ',' : '.'), aSep: ((Q$Culture.decimalSeparator === '.') ? ',' : '.'), aPad: true };
	};
	global.Serenity.DecimalEditor = $Serenity_DecimalEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DecimalEditorOptions
	var $Serenity_DecimalEditorOptions = function() {
	};
	$Serenity_DecimalEditorOptions.__typeName = 'Serenity.DecimalEditorOptions';
	$Serenity_DecimalEditorOptions.createInstance = function() {
		return $Serenity_DecimalEditorOptions.$ctor();
	};
	$Serenity_DecimalEditorOptions.$ctor = function() {
		var $this = {};
		$this.minValue = null;
		$this.maxValue = null;
		$this.decimals = null;
		$this.padDecimals = null;
		$this.minValue = '0.00';
		$this.maxValue = '999999999999.99';
		return $this;
	};
	global.Serenity.DecimalEditorOptions = $Serenity_DecimalEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DecimalFiltering
	var $Serenity_DecimalFiltering = function() {
		ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_DecimalEditor]).call(this);
	};
	$Serenity_DecimalFiltering.__typeName = 'Serenity.DecimalFiltering';
	global.Serenity.DecimalFiltering = $Serenity_DecimalFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DialogExtensions
	var $Serenity_DialogExtensions = function() {
	};
	$Serenity_DialogExtensions.__typeName = 'Serenity.DialogExtensions';
	$Serenity_DialogExtensions.dialogFlexify = function(dialog) {
		var flexify = new $Serenity_Flexify(dialog.closest('.ui-dialog'), {});
		return dialog;
	};
	$Serenity_DialogExtensions.dialogResizable = function(dialog, w, h, mw, mh) {
		var dlg = dialog.dialog();
		dlg.dialog('option', 'resizable', true);
		if (ss.isValue(mw)) {
			dlg.dialog('option', 'minWidth', ss.unbox(mw));
		}
		if (ss.isValue(w)) {
			dlg.dialog('option', 'width', ss.unbox(w));
		}
		if (ss.isValue(mh)) {
			dlg.dialog('option', 'minHeight', ss.unbox(mh));
		}
		if (ss.isValue(h)) {
			dlg.dialog('option', 'height', ss.unbox(h));
		}
		return dialog;
	};
	$Serenity_DialogExtensions.dialogMaximizable = function(dialog) {
		dialog.dialogExtend({ closable: true, maximizable: true, dblclick: 'maximize', icons: { maximize: 'ui-icon-maximize-window' } });
		return dialog;
	};
	$Serenity_DialogExtensions.dialogCloseOnEnter = function(dialog) {
		dialog.bind('keydown', function(e) {
			if (e.which !== $Serenity_DialogExtensions.$enterKeyCode) {
				return;
			}
			var tagName = e.target.tagName.toLowerCase();
			if (tagName === 'button' || tagName === 'select' || tagName === 'textarea' || tagName === 'input' && e.target.getAttribute('type') === 'button') {
				return;
			}
			var dlg = $(this);
			if (!dlg.hasClass('ui-dialog')) {
				dlg = dlg.closest('.ui-dialog');
			}
			var buttons = dlg.children('.ui-dialog-buttonpane').find('button');
			if (buttons.length > 0) {
				var defaultButton = buttons.find('.default-button');
				if (defaultButton.length > 0) {
					buttons = defaultButton;
				}
			}
			var button = buttons.eq(0);
			if (!button.is(':disabled')) {
				e.preventDefault();
				button.trigger('click');
			}
		});
		return dialog;
	};
	global.Serenity.DialogExtensions = $Serenity_DialogExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.DialogTypeRegistry
	var $Serenity_DialogTypeRegistry = function() {
	};
	$Serenity_DialogTypeRegistry.__typeName = 'Serenity.DialogTypeRegistry';
	$Serenity_DialogTypeRegistry.get = function(key) {
		if (!ss.keyExists($Serenity_DialogTypeRegistry.$knownTypes, key)) {
			var typeName = key + 'Dialog';
			var dialogType = null;
			for (var $t1 = 0; $t1 < Q$Config.rootNamespaces.length; $t1++) {
				var ns = Q$Config.rootNamespaces[$t1];
				dialogType = ss.getType(ns + '.' + typeName);
				if (ss.isValue(dialogType) && ss.isAssignableFrom($Serenity_IDialog, dialogType)) {
					break;
				}
			}
			if (ss.isNullOrUndefined(dialogType)) {
				throw new ss.Exception(typeName + ' dialog class is not found!');
			}
			$Serenity_DialogTypeRegistry.$knownTypes[key] = dialogType;
		}
		return $Serenity_DialogTypeRegistry.$knownTypes[key];
	};
	global.Serenity.DialogTypeRegistry = $Serenity_DialogTypeRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EditorFiltering
	var $Serenity_EditorFiltering = function() {
		this.$3$EditorTypeField = null;
		this.$3$UseRelativeField = false;
		this.$3$UseLikeField = false;
		ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_Widget]).call(this);
	};
	$Serenity_EditorFiltering.__typeName = 'Serenity.EditorFiltering';
	global.Serenity.EditorFiltering = $Serenity_EditorFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EditorTypeEditor
	var $Serenity_EditorTypeEditor = function(select) {
		var $t1 = $Serenity_SelectEditorOptions.$ctor();
		$t1.emptyOptionText = '--seçiniz--';
		$Serenity_SelectEditor.call(this, select, $t1);
	};
	$Serenity_EditorTypeEditor.__typeName = 'Serenity.EditorTypeEditor';
	global.Serenity.EditorTypeEditor = $Serenity_EditorTypeEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EditorTypeRegistry
	var $Serenity_EditorTypeRegistry = function() {
	};
	$Serenity_EditorTypeRegistry.__typeName = 'Serenity.EditorTypeRegistry';
	$Serenity_EditorTypeRegistry.get = function(key) {
		if (Q.isEmptyOrNull(key)) {
			throw new ss.ArgumentNullException('key');
		}
		$Serenity_EditorTypeRegistry.$initialize();
		var editorType = $Serenity_EditorTypeRegistry.$knownTypes[key.toLowerCase()];
		if (ss.isNullOrUndefined(editorType)) {
			throw new ss.Exception(ss.formatString("Can't find {0} editor type!", key));
		}
		return editorType;
	};
	$Serenity_EditorTypeRegistry.$initialize = function() {
		if (ss.isValue($Serenity_EditorTypeRegistry.$knownTypes)) {
			return;
		}
		$Serenity_EditorTypeRegistry.$knownTypes = {};
		var $t1 = ss.getAssemblies();
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var assembly = $t1[$t2];
			var $t3 = ss.getAssemblyTypes(assembly);
			for (var $t4 = 0; $t4 < $t3.length; $t4++) {
				var type = $t3[$t4];
				if (!(type.prototype instanceof $Serenity_Widget)) {
					continue;
				}
				if (ss.isGenericTypeDefinition(type)) {
					continue;
				}
				var fullName = ss.getTypeFullName(type).toLowerCase();
				$Serenity_EditorTypeRegistry.$knownTypes[fullName] = type;
				var editorAttr = ss.getAttributes(type, Serenity.EditorAttribute, false);
				if (ss.isValue(editorAttr) && editorAttr.length > 0) {
					var attrKey = ss.cast(editorAttr[0], Serenity.EditorAttribute).get_key();
					if (!Q.isEmptyOrNull(attrKey)) {
						$Serenity_EditorTypeRegistry.$knownTypes[attrKey.toLowerCase()] = type;
					}
				}
				for (var $t5 = 0; $t5 < Q$Config.rootNamespaces.length; $t5++) {
					var k = Q$Config.rootNamespaces[$t5];
					if (ss.startsWithString(fullName, k.toLowerCase() + '.')) {
						var kx = fullName.substr(k.length + 1).toLowerCase();
						if (ss.isNullOrUndefined($Serenity_EditorTypeRegistry.$knownTypes[kx])) {
							$Serenity_EditorTypeRegistry.$knownTypes[kx] = type;
						}
					}
				}
			}
		}
		$Serenity_EditorTypeRegistry.$setTypeKeysWithoutEditorSuffix();
	};
	$Serenity_EditorTypeRegistry.reset = function() {
		$Serenity_EditorTypeRegistry.$knownTypes = null;
	};
	$Serenity_EditorTypeRegistry.$setTypeKeysWithoutEditorSuffix = function() {
		var suffix = 'editor';
		var $t1 = Enumerable.from(Object.keys($Serenity_EditorTypeRegistry.$knownTypes)).toArray();
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var k = $t1[$t2];
			if (!ss.endsWithString(k, suffix)) {
				continue;
			}
			var p = k.substr(0, k.length - suffix.length);
			if (Q.isEmptyOrNull(p)) {
				continue;
			}
			if (ss.isValue($Serenity_EditorTypeRegistry.$knownTypes[p])) {
				continue;
			}
			$Serenity_EditorTypeRegistry.$knownTypes[p] = $Serenity_EditorTypeRegistry.$knownTypes[k];
		}
	};
	global.Serenity.EditorTypeRegistry = $Serenity_EditorTypeRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EmailEditor
	var $Serenity_EmailEditor = function(input, opt) {
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_EmailEditorOptions]).call(this, input, opt);
		$Serenity_EmailEditor.registerValidationMethods();
		input.addClass('emailuser').removeClass('flexify');
		var spanAt = $('<span/>').text('@').addClass('emailat').insertAfter(input);
		var domain = $('<input type="text"/>').addClass('emaildomain').addClass('flexify').insertAfter(spanAt);
		domain.bind('blur.' + this.uniqueName, function() {
			var validator = domain.closest('form').data('validator');
			if (ss.isValue(validator)) {
				validator.element(input[0]);
			}
		});
		if (!Q.isEmptyOrNull(this.options.domain)) {
			domain.val(this.options.domain);
		}
		if (this.options.readOnlyDomain) {
			domain.attr('readonly', 'readonly').addClass('disabled').attr('tabindex', '-1');
		}
		input.bind('keypress.' + this.uniqueName, ss.mkdel(this, function(e) {
			if (e.which === 64) {
				e.preventDefault();
				if (!this.options.readOnlyDomain) {
					domain.focus();
					domain.select();
				}
			}
		}));
		domain.bind('keypress.' + this.uniqueName, function(e1) {
			if (e1.which === 64) {
				e1.preventDefault();
			}
		});
		if (!this.options.readOnlyDomain) {
			input.change(ss.mkdel(this, function(e2) {
				this.set_value(input.val());
			}));
		}
	};
	$Serenity_EmailEditor.__typeName = 'Serenity.EmailEditor';
	$Serenity_EmailEditor.registerValidationMethods = function() {
		if (ss.staticEquals($.validator.methods['emailuser'], null)) {
			$.validator.addMethod('emailuser', function(value, element) {
				var domain = $(element).nextAll('.emaildomain');
				if (domain.length > 0 && ss.isNullOrUndefined(domain.attr('readonly'))) {
					if (this.optional(element) && this.optional(domain[0])) {
						return true;
					}
					value = value + '@' + domain.val();
					if (Q$Config.emailAllowOnlyAscii) {
						return (new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")).test(value);
					}
					return (new RegExp("^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))$", 'i')).test(value);
				}
				else {
					if (Q$Config.emailAllowOnlyAscii) {
						return this.optional(element) || (new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$")).test(value);
					}
					return this.optional(element) || (new RegExp("^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))$", 'i')).test(value);
				}
			}, 'Lütfen geçerli bir e-posta adresi giriniz!');
		}
	};
	global.Serenity.EmailEditor = $Serenity_EmailEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EmailEditorOptions
	var $Serenity_EmailEditorOptions = function() {
	};
	$Serenity_EmailEditorOptions.__typeName = 'Serenity.EmailEditorOptions';
	$Serenity_EmailEditorOptions.createInstance = function() {
		return $Serenity_EmailEditorOptions.$ctor();
	};
	$Serenity_EmailEditorOptions.$ctor = function() {
		var $this = {};
		$this.domain = null;
		$this.readOnlyDomain = false;
		return $this;
	};
	global.Serenity.EmailEditorOptions = $Serenity_EmailEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EntityDialog
	var $Serenity_EntityDialog$1 = function(TEntity) {
		var $type = function() {
			ss.makeGenericType($Serenity_EntityDialog$2, [TEntity, Object]).$ctor1.call(this, null);
		};
		ss.registerGenericClassInstance($type, $Serenity_EntityDialog$1, [TEntity], {}, function() {
			return ss.makeGenericType($Serenity_EntityDialog$2, [TEntity, Object]);
		}, function() {
			return [$Serenity_IDialog, $Serenity_IEditDialog];
		});
		return $type;
	};
	$Serenity_EntityDialog$1.__typeName = 'Serenity.EntityDialog$1';
	ss.initGenericClass($Serenity_EntityDialog$1, $asm, 1);
	global.Serenity.EntityDialog$1 = $Serenity_EntityDialog$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EntityDialog
	var $Serenity_EntityDialog$2 = function(TEntity, TOptions) {
		var $type = function() {
			$type.$ctor2.call(this, Q.newBodyDiv(), null);
		};
		$type.$ctor1 = function(opt) {
			$type.$ctor2.call(this, Q.newBodyDiv(), opt);
		};
		$type.$ctor2 = function(div, opt) {
			this.$entity = null;
			this.$entityId = null;
			this.$entityType = null;
			this.$localTextPrefix = null;
			this.$entitySingular = null;
			this.$entityIdField = null;
			this.$entityNameField = null;
			this.$entityIsActiveField = null;
			this.$formKey = null;
			this.$service = null;
			this.localizationGrid = null;
			this.localizationButton = null;
			this.localizationLastValue = null;
			this.localizationPendingValue = null;
			this.propertyGrid = null;
			this.saveAndCloseButton = null;
			this.applyChangesButton = null;
			this.deleteButton = null;
			this.undeleteButton = null;
			this.cloneButton = null;
			ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]).$ctor2.call(this, div, opt);
			if (!this.isAsyncWidget()) {
				this.$initPropertyGrid();
				this.$initLocalizationGrid();
			}
		};
		ss.registerGenericClassInstance($type, $Serenity_EntityDialog$2, [TEntity, TOptions], {
			initializeAsync: function() {
				return $Serenity_Widget.prototype.initializeAsync.call(this).then(ss.mkdel(this, this.$initPropertyGridAsync), null).then(ss.mkdel(this, this.$initLocalizationGridAsync), null);
			},
			destroy: function() {
				if (ss.isValue(this.propertyGrid)) {
					this.propertyGrid.destroy();
					this.propertyGrid = null;
				}
				if (ss.isValue(this.localizationGrid)) {
					this.localizationGrid.destroy();
					this.localizationGrid = null;
				}
				this.undeleteButton = null;
				this.applyChangesButton = null;
				this.deleteButton = null;
				this.saveAndCloseButton = null;
				ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]).prototype.destroy.call(this);
			},
			get_entity: function() {
				return this.$entity;
			},
			set_entity: function(value) {
				this.$entity = value || ss.createInstance(TEntity);
			},
			get_entityId: function() {
				return this.$entityId;
			},
			set_entityId: function(value) {
				this.$entityId = value;
			},
			getEntityNameFieldValue: function() {
				return ss.coalesce(this.get_entity()[this.getEntityNameField()], '').toString();
			},
			getEntityTitle: function() {
				if (!this.get_isEditMode()) {
					return ss.formatString(Texts$Controls$EntityDialog.NewRecordTitle.get(), this.getEntitySingular());
				}
				else {
					var title = ss.coalesce(this.getEntityNameFieldValue(), '');
					return ss.formatString(Texts$Controls$EntityDialog.EditRecordTitle.get(), this.getEntitySingular(), (Q.isEmptyOrNull(title) ? '' : (' (' + title + ')')));
				}
			},
			updateTitle: function() {
				if (!this.isPanel) {
					this.element.dialog().dialog('option', 'title', this.getEntityTitle());
				}
			},
			getTemplateName: function() {
				var templateName = ss.makeGenericType($Serenity_TemplatedWidget$1, [TOptions]).prototype.getTemplateName.call(this);
				if (!Q.canLoadScriptData('Template.' + templateName) && Q.canLoadScriptData('Template.EntityDialog')) {
					return 'EntityDialog';
				}
				return templateName;
			},
			get_isCloneMode: function() {
				return ss.isValue(this.get_entityId()) && Serenity.IdExtensions.isNegativeId(ss.unbox(this.get_entityId()));
			},
			get_isEditMode: function() {
				return ss.isValue(this.get_entityId()) && Serenity.IdExtensions.isPositiveId(ss.unbox(this.get_entityId()));
			},
			get_isDeleted: function() {
				if (ss.isNullOrUndefined(this.get_entityId())) {
					return false;
				}
				var value = this.get_entity()[this.getEntityIsActiveField()];
				if (ss.isNullOrUndefined(value)) {
					return false;
				}
				return Serenity.IdExtensions.isNegativeId(ss.unbox(value));
			},
			get_isNew: function() {
				return ss.isNullOrUndefined(this.get_entityId());
			},
			get_isNewOrDeleted: function() {
				return this.get_isNew() || this.get_isDeleted();
			},
			getDeleteOptions: function(callback) {
				return {};
			},
			deleteHandler: function(options, callback) {
				Q.serviceCall(options);
			},
			doDelete: function(callback) {
				var self = this;
				var baseOptions = {};
				baseOptions.service = this.getService() + '/Delete';
				var request = {};
				request.EntityId = this.get_entityId();
				baseOptions.request = request;
				baseOptions.onSuccess = ss.mkdel(this, function(response) {
					self.onDeleteSuccess(response);
					if (!ss.staticEquals(callback, null)) {
						callback(response);
					}
					self.element.triggerHandler('ondatachange', [{ entityId: request.EntityId, entity: this.$entity, type: 'delete' }]);
				});
				var thisOptions = this.getDeleteOptions(callback);
				var finalOptions = $.extend(baseOptions, thisOptions);
				this.deleteHandler(finalOptions, callback);
			},
			onDeleteSuccess: function(response) {
			},
			getEntityType: function() {
				if (ss.isNullOrUndefined(this.$entityType)) {
					var typeAttributes = ss.getAttributes(ss.getInstanceType(this), Serenity.EntityTypeAttribute, true);
					if (typeAttributes.length === 1) {
						this.$entityType = typeAttributes[0].get_value();
						return this.$entityType;
					}
					// remove global namespace
					var name = ss.getTypeFullName(ss.getInstanceType(this));
					var px = name.indexOf('.');
					if (px >= 0) {
						name = name.substring(px + 1);
					}
					// don't like this kind of convention, make it obsolete soon...
					if (ss.endsWithString(name, 'Dialog') || ss.endsWithString(name, 'Control')) {
						name = name.substr(0, name.length - 6);
					}
					else if (ss.endsWithString(name, 'Panel')) {
						name = name.substr(0, name.length - 5);
					}
					this.$entityType = name;
				}
				return this.$entityType;
			},
			getFormKey: function() {
				if (ss.isNullOrUndefined(this.$formKey)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.FormKeyAttribute, true);
					if (attributes.length >= 1) {
						this.$formKey = attributes[0].get_value();
					}
					else {
						this.$formKey = this.getEntityType();
					}
				}
				return this.$formKey;
			},
			getLocalTextPrefix: function() {
				if (ss.isNullOrUndefined(this.$localTextPrefix)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.LocalTextPrefixAttribute, true);
					if (attributes.length >= 1) {
						this.$localTextPrefix = attributes[0].get_value();
					}
					else {
						this.$localTextPrefix = this.getEntityType();
					}
					this.$localTextPrefix = 'Db.' + this.$localTextPrefix + '.';
				}
				return this.$localTextPrefix;
			},
			getEntitySingular: function() {
				if (ss.isNullOrUndefined(this.$entitySingular)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.ItemNameAttribute, true);
					if (attributes.length >= 1) {
						this.$entitySingular = attributes[0].get_value();
						this.$entitySingular = Q$LT.getDefault(this.$entitySingular, this.$entitySingular);
					}
					else {
						var $t1 = Q.tryGetText(this.getLocalTextPrefix() + 'EntitySingular');
						if (ss.isNullOrUndefined($t1)) {
							$t1 = this.getEntityType();
						}
						this.$entitySingular = $t1;
					}
				}
				return this.$entitySingular;
			},
			getEntityNameField: function() {
				if (ss.isNullOrUndefined(this.$entityNameField)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.NamePropertyAttribute, true);
					if (attributes.length >= 1) {
						this.$entityNameField = attributes[0].get_value();
					}
					else {
						this.$entityNameField = 'Name';
					}
				}
				return this.$entityNameField;
			},
			getEntityIdField: function() {
				if (ss.isNullOrUndefined(this.$entityIdField)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.IdPropertyAttribute, true);
					if (attributes.length >= 1) {
						this.$entityIdField = attributes[0].get_value();
					}
					else {
						this.$entityIdField = 'ID';
					}
				}
				return this.$entityIdField;
			},
			getEntityIsActiveField: function() {
				if (ss.isNullOrUndefined(this.$entityIsActiveField)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.IsActivePropertyAttribute, true);
					if (attributes.length >= 1) {
						this.$entityIsActiveField = attributes[0].get_value();
					}
					else {
						this.$entityIsActiveField = 'IsActive';
					}
				}
				return this.$entityIsActiveField;
			},
			getService: function() {
				if (ss.isNullOrUndefined(this.$service)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.ServiceAttribute, true);
					if (attributes.length >= 1) {
						this.$service = attributes[0].get_value();
					}
					else {
						this.$service = ss.replaceAllString(this.getEntityType(), String.fromCharCode(46), String.fromCharCode(47));
					}
				}
				return this.$service;
			},
			load: function(entityOrId, done, fail) {
				Q.tryCatch(fail, ss.mkdel(this, function() {
					if (ss.isNullOrUndefined(entityOrId)) {
						this.loadResponse({});
						done();
						return;
					}
					var scriptType = typeof(entityOrId);
					if (scriptType === 'string' || scriptType === 'number') {
						var self = this;
						var entityId = entityOrId;
						this.loadById(entityId, function(response) {
							window.setTimeout(done, 0);
						}, null);
						return;
					}
					var entity = entityOrId || ss.createInstance(TEntity);
					this.loadResponse({ Entity: entity });
					done();
				}));
			},
			loadNewAndOpenDialog: function() {
				this.loadResponse({});
				if (!this.isPanel) {
					this.element.dialog().dialog('open');
				}
			},
			loadEntityAndOpenDialog: function(entity) {
				this.loadResponse({ Entity: entity });
				if (!this.isPanel) {
					this.element.dialog().dialog('open');
				}
			},
			loadResponse: function(data) {
				data = data || {};
				this.onLoadingData(data);
				var entity = data.Entity || ss.createInstance(TEntity);
				this.beforeLoadEntity(entity);
				this.loadEntity(entity);
				this.set_entity(entity);
				this.afterLoadEntity();
			},
			loadEntity: function(entity) {
				var idField = this.getEntityIdField();
				if (ss.isValue(idField)) {
					this.set_entityId(Serenity.IdExtensions.convertToId(entity[idField]));
				}
				this.set_entity(entity);
				if (ss.isValue(this.propertyGrid)) {
					this.propertyGrid.set_mode((this.get_isEditMode() ? 1 : 0));
					this.propertyGrid.load(entity);
				}
			},
			beforeLoadEntity: function(entity) {
				this.localizationPendingValue = null;
				this.localizationLastValue = null;
			},
			afterLoadEntity: function() {
				this.updateInterface();
				this.updateTitle();
			},
			loadByIdAndOpenDialog: function(entityId) {
				var self = this;
				this.loadById(entityId, ss.mkdel(this, function(response) {
					window.setTimeout(ss.mkdel(this, function() {
						if (!this.isPanel) {
							self.element.dialog().dialog('open');
						}
					}), 0);
				}), ss.mkdel(this, function() {
					if (!this.isPanel && !self.get_element().is(':visible')) {
						self.get_element().remove();
					}
				}));
			},
			onLoadingData: function(data) {
			},
			getLoadByIdOptions: function(id, callback) {
				return {};
			},
			getLoadByIdRequest: function(id) {
				var request = {};
				request.EntityId = id;
				return request;
			},
			reloadById: function() {
				this.loadById(ss.unbox(this.get_entityId()), null, null);
			},
			loadById: function(id, callback, fail) {
				var baseOptions = {};
				baseOptions.service = this.getService() + '/Retrieve';
				baseOptions.blockUI = true;
				baseOptions.request = this.getLoadByIdRequest(id);
				var self = this;
				baseOptions.onSuccess = function(response) {
					self.loadResponse(response);
					if (!ss.staticEquals(callback, null)) {
						callback(response);
					}
				};
				baseOptions.onCleanup = function() {
					if (ss.isValue(self.validator)) {
						Q$Externals.validatorAbortHandler(self.validator);
					}
				};
				var thisOptions = this.getLoadByIdOptions(id, callback);
				var finalOptions = $.extend(baseOptions, thisOptions);
				this.loadByIdHandler(finalOptions, callback, fail);
			},
			loadByIdHandler: function(options, callback, fail) {
				var request = Q.serviceCall(options);
				if (!ss.staticEquals(fail, null)) {
					request.fail(fail);
				}
			},
			$initLocalizationGrid: function() {
				var pgDiv = this.byId$1('PropertyGrid');
				if (pgDiv.length <= 0) {
					return;
				}
				var pgOptions = this.getPropertyGridOptions();
				this.$initLocalizationGridCommon(pgOptions);
			},
			$initLocalizationGridAsync: function() {
				return RSVP.resolve().then(ss.mkdel(this, function() {
					var pgDiv = this.byId$1('PropertyGrid');
					if (pgDiv.length <= 0) {
						return RSVP.resolve();
					}
					return this.getPropertyGridOptionsAsync().then(ss.mkdel(this, function(pgOptions) {
						this.$initLocalizationGridCommon(pgOptions);
					}), null);
				}), null);
			},
			$initLocalizationGridCommon: function(pgOptions) {
				var pgDiv = this.byId$1('PropertyGrid');
				var anyLocalizable = false;
				for (var $t1 = 0; $t1 < pgOptions.items.length; $t1++) {
					var item = pgOptions.items[$t1];
					if (item.localizable) {
						anyLocalizable = true;
					}
				}
				if (!anyLocalizable) {
					return;
				}
				var localGridDiv = $('<div/>').attr('id', this.get_idPrefix() + 'LocalizationGrid').hide().insertAfter(pgDiv);
				pgOptions.idPrefix = this.idPrefix + 'Localization_';
				var items = [];
				for (var $t2 = 0; $t2 < pgOptions.items.length; $t2++) {
					var item1 = pgOptions.items[$t2];
					if (item1.localizable) {
						var copy = $.extend({}, item1);
						copy.oneWay = true;
						copy.readOnly = true;
						copy.required = false;
						copy.defaultValue = null;
						items.push(copy);
						var $t3 = ss.getEnumerator(this.getLanguages());
						try {
							while ($t3.moveNext()) {
								var lang = $t3.current();
								copy = $.extend({}, item1);
								copy.name = lang.item1 + '$' + copy.name;
								copy.title = lang.item2;
								copy.cssClass = [copy.cssClass, 'translation'].join(' ');
								copy.insertable = true;
								copy.updatable = true;
								copy.oneWay = false;
								copy.required = false;
								copy.localizable = false;
								copy.defaultValue = null;
								items.push(copy);
							}
						}
						finally {
							$t3.dispose();
						}
					}
				}
				pgOptions.items = items;
				this.localizationGrid = (new $Serenity_PropertyGrid(localGridDiv, pgOptions)).init(null);
				localGridDiv.addClass('s-LocalizationGrid');
				var self = this;
			},
			get_isLocalizationMode: function() {
				return ss.isValue(this.localizationButton) && this.localizationButton.hasClass('pressed');
			},
			get_$isLocalizationModeAndChanged: function() {
				if (!this.get_isLocalizationMode()) {
					return false;
				}
				var newValue = this.$getLocalizationGridValue();
				return !ss.referenceEquals($.toJSON(this.localizationLastValue), $.toJSON(newValue));
			},
			$localizationButtonClick: function() {
				if (this.get_isLocalizationMode() && !this.validateForm()) {
					return;
				}
				if (this.get_$isLocalizationModeAndChanged()) {
					var newValue = this.$getLocalizationGridValue();
					this.localizationLastValue = newValue;
					this.localizationPendingValue = newValue;
				}
				this.localizationButton.toggleClass('pressed');
				this.updateInterface();
				if (this.get_isLocalizationMode()) {
					this.$loadLocalization();
				}
			},
			getLanguages: function() {
				return [];
			},
			$loadLocalization: function() {
				if (ss.isNullOrUndefined(this.localizationLastValue) && this.get_isNew()) {
					this.localizationGrid.load({});
					this.$setLocalizationGridCurrentValues();
					this.localizationLastValue = this.$getLocalizationGridValue();
					return;
				}
				if (ss.isValue(this.localizationLastValue)) {
					this.localizationGrid.load(this.localizationLastValue);
					this.$setLocalizationGridCurrentValues();
					return;
				}
				var self = this;
				var opt = {};
				opt.service = this.getService() + '/RetrieveLocalization';
				opt.blockUI = true;
				opt.request = { EntityId: ss.unbox(this.get_entityId()) };
				opt.onSuccess = ss.mkdel(this, function(response) {
					var copy = $.extend(ss.createInstance(TEntity), self.get_entity());
					var $t1 = ss.getEnumerator(Object.keys(response.Entities));
					try {
						while ($t1.moveNext()) {
							var language = $t1.current();
							var entity = response.Entities[language];
							var $t2 = ss.getEnumerator(Object.keys(entity));
							try {
								while ($t2.moveNext()) {
									var key = $t2.current();
									copy[language + '$' + key] = entity[key];
								}
							}
							finally {
								$t2.dispose();
							}
						}
					}
					finally {
						$t1.dispose();
					}
					self.localizationGrid.load(copy);
					this.$setLocalizationGridCurrentValues();
					this.localizationPendingValue = null;
					this.localizationLastValue = this.$getLocalizationGridValue();
				});
				Q.serviceCall(opt);
			},
			$setLocalizationGridCurrentValues: function() {
				var valueByName = {};
				this.localizationGrid.enumerateItems(ss.mkdel(this, function(item, widget) {
					if (item.name.indexOf('$') < 0 && widget.get_element().is(':input')) {
						valueByName[item.name] = this.byId$1(item.name).val();
						widget.get_element().val(valueByName[item.name]);
					}
				}));
				this.localizationGrid.enumerateItems(function(item1, widget1) {
					var idx = item1.name.indexOf('$');
					if (idx >= 0 && widget1.get_element().is(':input')) {
						var hint = valueByName[item1.name.substr(idx + 1)];
						if (ss.isValue(hint) && hint.length > 0) {
							widget1.get_element().attr('title', hint).attr('placeholder', hint);
						}
					}
				});
			},
			$getLocalizationGridValue: function() {
				var value = {};
				this.localizationGrid.save(value);
				var $t1 = ss.getEnumerator(Object.keys(value));
				try {
					while ($t1.moveNext()) {
						var k = $t1.current();
						if (k.indexOf(String.fromCharCode(36)) < 0) {
							delete value[k];
						}
					}
				}
				finally {
					$t1.dispose();
				}
				return value;
			},
			$getPendingLocalizations: function() {
				if (ss.isNullOrUndefined(this.localizationPendingValue)) {
					return null;
				}
				var result = {};
				var idField = this.getEntityIdField();
				var $t1 = ss.getEnumerator(this.getLanguages());
				try {
					while ($t1.moveNext()) {
						var pair = $t1.current();
						var language = pair.item1;
						var entity = {};
						if (ss.isValue(idField)) {
							entity[idField] = this.get_entityId();
						}
						var prefix = language + '$';
						var $t2 = ss.getEnumerator(Object.keys(this.localizationPendingValue));
						try {
							while ($t2.moveNext()) {
								var k = $t2.current();
								if (ss.startsWithString(k, prefix)) {
									entity[k.substr(prefix.length)] = this.localizationPendingValue[k];
								}
							}
						}
						finally {
							$t2.dispose();
						}
						result[language] = entity;
					}
				}
				finally {
					$t1.dispose();
				}
				return result;
			},
			$initPropertyGrid: function() {
				var pgDiv = this.byId$1('PropertyGrid');
				if (pgDiv.length <= 0) {
					return;
				}
				var pgOptions = this.getPropertyGridOptions();
				this.propertyGrid = (new $Serenity_PropertyGrid(pgDiv, pgOptions)).init(null);
				if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
					$Serenity_FLX.flexHeightOnly(this.propertyGrid.get_element().children('.categories'), 1);
				}
			},
			$initPropertyGridAsync: function() {
				return RSVP.resolve().then(ss.mkdel(this, function() {
					var pgDiv = this.byId$1('PropertyGrid');
					if (pgDiv.length <= 0) {
						return RSVP.resolve();
					}
					return this.getPropertyGridOptionsAsync().then(ss.mkdel(this, function(pgOptions) {
						this.propertyGrid = new $Serenity_PropertyGrid(pgDiv, pgOptions);
						if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
							$Serenity_FLX.flexHeightOnly(this.propertyGrid.get_element().children('.categories'), 1);
						}
						return this.propertyGrid.initialize();
					}), null);
				}), null);
			},
			getPropertyItems: function() {
				var formKey = this.getFormKey();
				return Q.getForm(formKey);
			},
			getPropertyGridOptions: function() {
				var $t1 = $Serenity_PropertyGridOptions.$ctor();
				$t1.idPrefix = this.idPrefix;
				$t1.items = this.getPropertyItems();
				$t1.mode = 0;
				$t1.localTextPrefix = 'Forms.' + this.getFormKey() + '.';
				return $t1;
			},
			getPropertyGridOptionsAsync: function() {
				return this.getPropertyItemsAsync().then(ss.mkdel(this, function(propertyItems) {
					var $t1 = $Serenity_PropertyGridOptions.$ctor();
					$t1.idPrefix = this.idPrefix;
					$t1.items = propertyItems;
					$t1.mode = 0;
					$t1.localTextPrefix = 'Forms.' + this.getFormKey() + '.';
					return $t1;
				}), null);
			},
			getPropertyItemsAsync: function() {
				return RSVP.resolve().then(ss.mkdel(this, function() {
					var formKey = this.getFormKey();
					return Q.getFormAsync(formKey);
				}), null);
			},
			validateBeforeSave: function() {
				return true;
			},
			getSaveOptions: function(callback) {
				var self = this;
				var opt = {};
				opt.service = this.getService() + '/' + (this.get_isEditMode() ? 'Update' : 'Create');
				opt.onSuccess = ss.mkdel(this, function(response) {
					self.onSaveSuccess(response);
					if (!ss.staticEquals(callback, null)) {
						callback(response);
					}
					var $t2 = (self.get_isEditMode() ? 'update' : 'create');
					var $t1 = opt.request;
					if (ss.isNullOrUndefined($t1)) {
						$t1 = new Object();
					}
					var $t5 = $t1.Entity;
					var $t4;
					if (self.get_isEditMode()) {
						$t4 = this.get_entityId();
					}
					else {
						var $t3 = response;
						if (ss.isNullOrUndefined($t3)) {
							$t3 = new Object();
						}
						$t4 = $t3.EntityId;
					}
					var dci = { type: $t2, entity: $t5, entityId: $t4 };
					self.element.triggerHandler('ondatachange', [dci]);
				});
				opt.onCleanup = function() {
					if (ss.isValue(self.validator)) {
						Q$Externals.validatorAbortHandler(self.validator);
					}
				};
				opt.request = this.getSaveRequest();
				return opt;
			},
			getSaveEntity: function() {
				var entity = ss.createInstance(TEntity);
				if (ss.isValue(this.propertyGrid)) {
					this.propertyGrid.save(entity);
				}
				if (this.get_isEditMode()) {
					var idField = this.getEntityIdField();
					if (ss.isValue(idField)) {
						entity[idField] = this.get_entityId();
					}
				}
				return entity;
			},
			getSaveRequest: function() {
				var entity = this.getSaveEntity();
				var req = {};
				req.Entity = entity;
				if (ss.isValue(this.localizationPendingValue)) {
					req.Localizations = this.$getPendingLocalizations();
				}
				return req;
			},
			onSaveSuccess: function(response) {
			},
			save_SubmitHandler: function(callback) {
				var options = this.getSaveOptions(callback);
				this.saveHandler(options, callback);
			},
			save: function(callback) {
				var self = this;
				return $Serenity_ValidationHelper.submit(this.byId$1('Form'), function() {
					return self.validateBeforeSave();
				}, function() {
					self.save_SubmitHandler(callback);
				});
			},
			saveHandler: function(options, callback) {
				Q.serviceCall(options);
			},
			initToolbar: function() {
				ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]).prototype.initToolbar.call(this);
				if (ss.isNullOrUndefined(this.toolbar)) {
					return;
				}
				this.saveAndCloseButton = this.toolbar.findButton('save-and-close-button');
				this.applyChangesButton = this.toolbar.findButton('apply-changes-button');
				this.deleteButton = this.toolbar.findButton('delete-button');
				this.undeleteButton = this.toolbar.findButton('undo-delete-button');
				this.cloneButton = this.toolbar.findButton('clone-button');
				this.localizationButton = this.toolbar.findButton('localization-button');
			},
			showSaveSuccessMessage: function(response) {
				Q.notifySuccess(Texts$Controls$EntityDialog.SaveSuccessMessage.get());
			},
			getToolbarButtons: function() {
				var list = [];
				var self = this;
				if (!this.isPanel) {
					list.push({
						title: Texts$Controls$EntityDialog.SaveButton.get(),
						cssClass: 'save-and-close-button',
						onClick: function() {
							self.save(function(response) {
								self.element.dialog().dialog('close');
							});
						}
					});
				}
				list.push({ title: (this.isPanel ? Texts$Controls$EntityDialog.SaveButton : Q$LT.empty).get(), hint: (this.isPanel ? Texts$Controls$EntityDialog.SaveButton : Texts$Controls$EntityDialog.ApplyChangesButton).get(), cssClass: 'apply-changes-button', onClick: ss.mkdel(this, function() {
					self.save(ss.mkdel(this, function(response1) {
						if (self.get_isEditMode()) {
							self.loadById(self.get_entityId(), null, null);
						}
						else {
							self.loadById(response1.EntityId, null, null);
						}
						this.showSaveSuccessMessage(response1);
					}));
				}) });
				if (!this.isPanel) {
					list.push({
						title: Texts$Controls$EntityDialog.DeleteButton.get(),
						cssClass: 'delete-button',
						onClick: function() {
							Q.confirm(Texts$Controls$EntityDialog.DeleteConfirmation.get(), function() {
								self.doDelete(function() {
									self.element.dialog().dialog('close');
								});
							});
						}
					});
					list.push({
						title: Texts$Controls$EntityDialog.UndeleteButton.get(),
						cssClass: 'undo-delete-button',
						onClick: function() {
							if (self.get_isDeleted()) {
								Q.confirm(Texts$Controls$EntityDialog.UndeleteConfirmation.get(), function() {
									self.undelete(function() {
										self.loadById(self.get_entityId(), null, null);
									});
								});
							}
						}
					});
					list.push({ title: Texts$Controls$EntityDialog.LocalizationButton.get(), cssClass: 'localization-button', onClick: ss.mkdel(this, function() {
						this.$localizationButtonClick();
					}) });
					list.push({ title: Texts$Controls$EntityDialog.CloneButton.get(), cssClass: 'clone-button', onClick: ss.mkdel(this, function() {
						if (!self.get_isEditMode()) {
							return;
						}
						var cloneEntity = this.getCloningEntity();
						$Serenity_Widget.createOfType(ss.getInstanceType(this), null, new Object(), ss.mkdel(this, function(w) {
							$Serenity_SubDialogHelper.bubbleDataChange($Serenity_SubDialogHelper.cascade(w, this.element), this, true).loadEntityAndOpenDialog(cloneEntity);
						}));
					}) });
				}
				return list;
			},
			getCloningEntity: function() {
				var clone = ss.createInstance(TEntity);
				clone = $.extend(clone, this.get_entity());
				var idField = this.getEntityIdField();
				if (!Q.isEmptyOrNull(idField)) {
					delete clone[idField];
				}
				var isActiveField = this.getEntityIsActiveField();
				if (!Q.isEmptyOrNull(isActiveField)) {
					delete clone[isActiveField];
				}
				return clone;
			},
			updateInterface: function() {
				var isDeleted = this.get_isDeleted();
				var isLocalizationMode = this.get_isLocalizationMode();
				if (ss.isValue(this.tabs)) {
					Serenity.TabsExtensions.setDisabled(this.tabs, 'Log', this.get_isNewOrDeleted());
				}
				if (ss.isValue(this.propertyGrid)) {
					this.propertyGrid.get_element().toggle(!isLocalizationMode);
				}
				if (ss.isValue(this.localizationGrid)) {
					this.localizationGrid.get_element().toggle(isLocalizationMode);
				}
				if (ss.isValue(this.localizationButton)) {
					this.localizationButton.toggle(ss.isValue(this.localizationGrid));
					this.localizationButton.find('.button-inner').text((this.get_isLocalizationMode() ? Texts$Controls$EntityDialog.LocalizationBack : Texts$Controls$EntityDialog.LocalizationButton).get());
				}
				if (isLocalizationMode) {
					if (ss.isValue(this.toolbar)) {
						this.toolbar.findButton('tool-button').not('.localization-hidden').addClass('.localization-hidden').hide();
					}
					if (ss.isValue(this.localizationButton)) {
						this.localizationButton.show();
					}
					return;
				}
				this.toolbar.findButton('localization-hidden').removeClass('localization-hidden').show();
				if (ss.isValue(this.deleteButton)) {
					this.deleteButton.toggle(this.get_isEditMode() && !isDeleted);
				}
				if (ss.isValue(this.undeleteButton)) {
					this.undeleteButton.toggle(this.get_isEditMode() && isDeleted);
				}
				if (ss.isValue(this.saveAndCloseButton)) {
					this.saveAndCloseButton.toggle(!isDeleted);
					this.saveAndCloseButton.find('.button-inner').text((this.get_isNew() ? Texts$Controls$EntityDialog.SaveButton : Texts$Controls$EntityDialog.UpdateButton).get());
				}
				if (ss.isValue(this.applyChangesButton)) {
					this.applyChangesButton.toggle(!isDeleted);
				}
				if (ss.isValue(this.cloneButton)) {
					this.cloneButton.toggle(false);
				}
			},
			getUndeleteOptions: function(callback) {
				return {};
			},
			undeleteHandler: function(options, callback) {
				Q.serviceCall(options);
			},
			undelete: function(callback) {
				var self = this;
				var baseOptions = {};
				baseOptions.service = this.getService() + '/Undelete';
				var request = {};
				request.EntityId = this.get_entityId();
				baseOptions.request = request;
				baseOptions.onSuccess = ss.mkdel(this, function(response) {
					if (!ss.staticEquals(callback, null)) {
						callback(response);
					}
					self.element.triggerHandler('ondatachange', [{ entityId: self.get_entityId(), entity: this.$entity, type: 'undelete' }]);
				});
				var thisOptions = this.getUndeleteOptions(callback);
				var finalOptions = $.extend(baseOptions, thisOptions);
				this.undeleteHandler(finalOptions, callback);
			}
		}, function() {
			return ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]);
		}, function() {
			return [$Serenity_IDialog, $Serenity_IEditDialog];
		});
		$type.$ctor1.prototype = $type.$ctor2.prototype = $type.prototype;
		return $type;
	};
	$Serenity_EntityDialog$2.__typeName = 'Serenity.EntityDialog$2';
	ss.initGenericClass($Serenity_EntityDialog$2, $asm, 2);
	global.Serenity.EntityDialog$2 = $Serenity_EntityDialog$2;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EntityGrid
	var $Serenity_EntityGrid$1 = function(TEntity) {
		var $type = function(container) {
			ss.makeGenericType($Serenity_EntityGrid$2, [TEntity, Object]).call(this, container, null);
		};
		ss.registerGenericClassInstance($type, $Serenity_EntityGrid$1, [TEntity], {}, function() {
			return ss.makeGenericType($Serenity_EntityGrid$2, [TEntity, Object]);
		}, function() {
			return [$Serenity_IDataGrid];
		});
		return $type;
	};
	$Serenity_EntityGrid$1.__typeName = 'Serenity.EntityGrid$1';
	ss.initGenericClass($Serenity_EntityGrid$1, $asm, 1);
	global.Serenity.EntityGrid$1 = $Serenity_EntityGrid$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EntityGrid
	var $Serenity_EntityGrid$2 = function(TEntity, TOptions) {
		var $type = function(container, opt) {
			this.$entityType = null;
			this.$entityPlural = null;
			this.$entitySingular = null;
			this.$service = null;
			this.$entityDialogType = null;
			ss.makeGenericType($Serenity_DataGrid$2, [TEntity, TOptions]).call(this, container, opt);
		};
		ss.registerGenericClassInstance($type, $Serenity_EntityGrid$2, [TEntity, TOptions], {
			usePager: function() {
				return true;
			},
			createToolbarExtensions: function() {
				this.createIncludeDeletedButton();
				this.createQuickSearchInput();
			},
			getInitialTitle: function() {
				return this.getEntityPlural();
			},
			getLocalTextPrefix: function() {
				if (ss.isNullOrUndefined(this.localTextPrefix)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.LocalTextPrefixAttribute, true);
					if (attributes.length >= 1) {
						this.localTextPrefix = attributes[0].get_value();
					}
					else {
						this.localTextPrefix = this.getEntityType();
					}
					this.localTextPrefix = 'Db.' + this.localTextPrefix + '.';
				}
				return this.localTextPrefix;
			},
			getEntityType: function() {
				if (ss.isNullOrUndefined(this.$entityType)) {
					var typeAttributes = ss.getAttributes(ss.getInstanceType(this), Serenity.EntityTypeAttribute, true);
					if (typeAttributes.length === 1) {
						this.$entityType = typeAttributes[0].get_value();
						return this.$entityType;
					}
					// typeof(TEntity).Name'i kullanamayız, TEntity genelde Serializable ve Imported olduğundan dolayı tipi Object e karşılık geliyor!
					// remove global namespace
					var name = ss.getTypeFullName(ss.getInstanceType(this));
					var px = name.indexOf('.');
					if (px >= 0) {
						name = name.substring(px + 1);
					}
					if (ss.endsWithString(name, 'Grid')) {
						name = name.substr(0, name.length - 4);
					}
					else if (ss.endsWithString(name, 'SubGrid')) {
						name = name.substr(0, name.length - 7);
					}
					this.$entityType = name;
				}
				return this.$entityType;
			},
			getEntityPlural: function() {
				if (ss.isNullOrUndefined(this.$entityPlural)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), $System_ComponentModel_DisplayNameAttribute, true);
					if (attributes.length >= 1) {
						this.$entityPlural = attributes[0].get_displayName();
						this.$entityPlural = Q$LT.getDefault(this.$entityPlural, this.$entityPlural);
					}
					else {
						var $t1 = Q.tryGetText(this.getLocalTextPrefix() + 'EntityPlural');
						if (ss.isNullOrUndefined($t1)) {
							$t1 = this.getEntityType();
						}
						this.$entityPlural = $t1;
					}
				}
				return this.$entityPlural;
			},
			getEntitySingular: function() {
				if (ss.isNullOrUndefined(this.$entitySingular)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.ItemNameAttribute, true);
					if (attributes.length >= 1) {
						this.$entitySingular = attributes[0].get_value();
						this.$entitySingular = Q$LT.getDefault(this.$entitySingular, this.$entitySingular);
					}
					else {
						var $t1 = Q.tryGetText(this.getLocalTextPrefix() + 'EntitySingular');
						if (ss.isNullOrUndefined($t1)) {
							$t1 = this.getEntityType();
						}
						this.$entitySingular = $t1;
					}
				}
				return this.$entitySingular;
			},
			getAddButtonCaption: function() {
				return ss.formatString(Texts$Controls$EntityGrid.NewButton.get(), this.getEntitySingular());
			},
			getButtons: function() {
				var self = this;
				var buttons = [];
				buttons.push({
					title: this.getAddButtonCaption(),
					cssClass: 'add-button',
					onClick: function() {
						self.addButtonClick();
					}
				});
				buttons.push(this.newRefreshButton(false));
				return buttons;
			},
			newRefreshButton: function(noText) {
				var self = this;
				return {
					title: (noText ? null : Texts$Controls$EntityGrid.RefreshButton.get()),
					hint: (noText ? Texts$Controls$EntityGrid.RefreshButton.get() : null),
					cssClass: 'refresh-button',
					onClick: function() {
						self.refresh();
					}
				};
			},
			addButtonClick: function() {
				this.editItem(ss.createInstance(TEntity));
			},
			editItem: function(entityOrId) {
				this.createEntityDialog(this.getItemType(), function(dlg) {
					var dialog = ss.safeCast(dlg, $Serenity_IEditDialog);
					if (ss.isValue(dialog)) {
						dialog.load(entityOrId, function() {
							dialog.dialogOpen();
						}, null);
						return;
					}
					throw new ss.InvalidOperationException(ss.formatString("{0} doesn't implement IEditDialog!", ss.getTypeFullName(ss.getInstanceType(dlg))));
				});
			},
			editItem$1: function(itemType, entityOrId) {
				if (ss.referenceEquals(itemType, this.getItemType())) {
					this.editItem(entityOrId);
					return;
				}
				this.createEntityDialog(itemType, function(dlg) {
					var dialog = ss.safeCast(dlg, $Serenity_IEditDialog);
					if (ss.isValue(dialog)) {
						dialog.load(entityOrId, function() {
							dialog.dialogOpen();
						}, null);
						return;
					}
					throw new ss.InvalidOperationException(ss.formatString("{0} doesn't implement IEditDialog!", ss.getTypeFullName(ss.getInstanceType(dlg))));
				});
			},
			getService: function() {
				if (ss.isNullOrUndefined(this.$service)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.ServiceAttribute, true);
					if (attributes.length >= 1) {
						this.$service = attributes[0].get_value();
					}
					else {
						this.$service = ss.replaceAllString(this.getEntityType(), String.fromCharCode(46), String.fromCharCode(47));
					}
				}
				return this.$service;
			},
			getViewOptions: function() {
				var opt = ss.makeGenericType($Serenity_DataGrid$2, [TEntity, TOptions]).prototype.getViewOptions.call(this);
				opt.url = Q.resolveUrl('~/Services/' + this.getService() + '/List');
				return opt;
			},
			getItemType: function() {
				return this.getEntityType();
			},
			initEntityDialog: function(dialog) {
				var self = this;
				$Serenity_SubDialogHelper.bindToDataChange(dialog, this, function(e, dci) {
					self.subDialogDataChange();
				}, true);
			},
			initEntityDialog$1: function(itemType, dialog) {
				if (ss.referenceEquals(itemType, this.getItemType())) {
					this.initEntityDialog(dialog);
					return;
				}
				var self = this;
				$Serenity_SubDialogHelper.bindToDataChange(dialog, this, function(e, dci) {
					self.subDialogDataChange();
				}, true);
			},
			createEntityDialog: function(itemType, callback) {
				var dialogClass = this.getEntityDialogType$1(itemType);
				var dialog = $Serenity_Widget.createOfType(dialogClass, null, this.getEntityDialogOptions$1(itemType), ss.mkdel(this, function(d) {
					this.initEntityDialog$1(itemType, d);
					if (!ss.staticEquals(callback, null)) {
						callback(d);
					}
				}));
				return dialog;
			},
			getEntityDialogOptions: function() {
				return {};
			},
			getEntityDialogOptions$1: function(itemType) {
				if (ss.referenceEquals(itemType, this.getItemType())) {
					return this.getEntityDialogOptions();
				}
				return {};
			},
			getEntityDialogType$1: function(itemType) {
				if (ss.referenceEquals(itemType, this.getItemType())) {
					return this.getEntityDialogType();
				}
				return $Serenity_DialogTypeRegistry.get(itemType);
			},
			getEntityDialogType: function() {
				if (ss.isNullOrUndefined(this.$entityDialogType)) {
					var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.DialogTypeAttribute, true);
					if (attributes.length >= 1) {
						this.$entityDialogType = attributes[0].get_value();
					}
					else {
						this.$entityDialogType = $Serenity_DialogTypeRegistry.get(this.getEntityType());
					}
				}
				return this.$entityDialogType;
			}
		}, function() {
			return ss.makeGenericType($Serenity_DataGrid$2, [TEntity, TOptions]);
		}, function() {
			return [$Serenity_IDataGrid];
		});
		return $type;
	};
	$Serenity_EntityGrid$2.__typeName = 'Serenity.EntityGrid$2';
	ss.initGenericClass($Serenity_EntityGrid$2, $asm, 2);
	global.Serenity.EntityGrid$2 = $Serenity_EntityGrid$2;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EnumEditor
	var $Serenity_EnumEditor = function(hidden, opt) {
		ss.makeGenericType($Serenity_Select2Editor$2, [$Serenity_EnumEditorOptions, Object]).call(this, hidden, opt);
		this.updateItems();
	};
	$Serenity_EnumEditor.__typeName = 'Serenity.EnumEditor';
	global.Serenity.EnumEditor = $Serenity_EnumEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EnumEditorOptions
	var $Serenity_EnumEditorOptions = function() {
	};
	$Serenity_EnumEditorOptions.__typeName = 'Serenity.EnumEditorOptions';
	$Serenity_EnumEditorOptions.createInstance = function() {
		return $Serenity_EnumEditorOptions.$ctor();
	};
	$Serenity_EnumEditorOptions.$ctor = function() {
		var $this = {};
		$this.enumKey = null;
		return $this;
	};
	global.Serenity.EnumEditorOptions = $Serenity_EnumEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.EnumFiltering
	var $Serenity_EnumFiltering = function() {
		ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_EnumEditor]).call(this);
	};
	$Serenity_EnumFiltering.__typeName = 'Serenity.EnumFiltering';
	global.Serenity.EnumFiltering = $Serenity_EnumFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterableAttribute
	var $Serenity_FilterableAttribute = function() {
		$Serenity_FilterableAttribute.$ctor1.call(this, true);
	};
	$Serenity_FilterableAttribute.__typeName = 'Serenity.FilterableAttribute';
	$Serenity_FilterableAttribute.$ctor1 = function(value) {
		this.$2$ValueField = false;
		this.set_value(value);
	};
	global.Serenity.FilterableAttribute = $Serenity_FilterableAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterDialog
	var $Serenity_FilterDialog = function() {
		this.$filterPanel = null;
		$Serenity_TemplatedDialog.call(this);
		this.$filterPanel = new $Serenity_FilterPanel(this.byId$1('FilterPanel'));
		this.$filterPanel.set_showInitialLine(true);
		this.$filterPanel.set_showSearchButton(false);
		this.$filterPanel.set_updateStoreOnReset(false);
	};
	$Serenity_FilterDialog.__typeName = 'Serenity.FilterDialog';
	global.Serenity.FilterDialog = $Serenity_FilterDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterDisplayBar
	var $Serenity_FilterDisplayBar = function(div) {
		ss.makeGenericType($Serenity_FilterWidgetBase$1, [Object]).call(this, div, null);
		this.get_element().find('.cap').text(Q.text('Controls.FilterPanel.EffectiveFilter'));
		this.get_element().find('.edit').text(Q.text('Controls.FilterPanel.EditFilter'));
		this.get_element().find('.reset').attr('title', Q.text('Controls.FilterPanel.ResetFilterHint'));
		var openFilterDialog = ss.mkdel(this, function(e) {
			e.preventDefault();
			var dialog = new $Serenity_FilterDialog();
			dialog.get_filterPanel().set_store(this.get_store());
			dialog.dialogOpen();
		});
		this.get_element().find('.edit').click(openFilterDialog);
		this.get_element().find('.txt').click(openFilterDialog);
		this.get_element().find('.reset').click(ss.mkdel(this, function(e1) {
			e1.preventDefault();
			ss.clear(this.get_store().get_items());
			this.get_store().raiseChanged();
		}));
	};
	$Serenity_FilterDisplayBar.__typeName = 'Serenity.FilterDisplayBar';
	global.Serenity.FilterDisplayBar = $Serenity_FilterDisplayBar;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilteringTypeRegistry
	var $Serenity_FilteringTypeRegistry = function() {
	};
	$Serenity_FilteringTypeRegistry.__typeName = 'Serenity.FilteringTypeRegistry';
	$Serenity_FilteringTypeRegistry.get = function(key) {
		if (Q.isEmptyOrNull(key)) {
			throw new ss.ArgumentNullException('key');
		}
		$Serenity_FilteringTypeRegistry.$initialize();
		var formatterType = $Serenity_FilteringTypeRegistry.$knownTypes[key.toLowerCase()];
		if (ss.isNullOrUndefined(formatterType)) {
			throw new ss.Exception(ss.formatString("Can't find {0} filter handler type!", key));
		}
		return formatterType;
	};
	$Serenity_FilteringTypeRegistry.$initialize = function() {
		if (ss.isValue($Serenity_FilteringTypeRegistry.$knownTypes)) {
			return;
		}
		$Serenity_FilteringTypeRegistry.$knownTypes = {};
		var $t1 = ss.getAssemblies();
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var assembly = $t1[$t2];
			var $t3 = ss.getAssemblyTypes(assembly);
			for (var $t4 = 0; $t4 < $t3.length; $t4++) {
				var type = $t3[$t4];
				if (!ss.isAssignableFrom($Serenity_IFiltering, type)) {
					continue;
				}
				if (ss.isGenericTypeDefinition(type)) {
					continue;
				}
				var fullName = ss.getTypeFullName(type).toLowerCase();
				$Serenity_FilteringTypeRegistry.$knownTypes[fullName] = type;
				for (var $t5 = 0; $t5 < Q$Config.rootNamespaces.length; $t5++) {
					var k = Q$Config.rootNamespaces[$t5];
					if (ss.startsWithString(fullName, k.toLowerCase() + '.')) {
						var kx = fullName.substr(k.length + 1).toLowerCase();
						if (ss.isNullOrUndefined($Serenity_FilteringTypeRegistry.$knownTypes[kx])) {
							$Serenity_FilteringTypeRegistry.$knownTypes[kx] = type;
						}
					}
				}
			}
		}
		$Serenity_FilteringTypeRegistry.$setTypeKeysWithoutFilterHandlerSuffix();
	};
	$Serenity_FilteringTypeRegistry.reset = function() {
		$Serenity_FilteringTypeRegistry.$knownTypes = null;
	};
	$Serenity_FilteringTypeRegistry.$setTypeKeysWithoutFilterHandlerSuffix = function() {
		var suffix = 'filtering';
		var $t1 = Enumerable.from(Object.keys($Serenity_FilteringTypeRegistry.$knownTypes)).toArray();
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var k = $t1[$t2];
			if (!ss.endsWithString(k, suffix)) {
				continue;
			}
			var p = k.substr(0, k.length - suffix.length);
			if (Q.isEmptyOrNull(p)) {
				continue;
			}
			if (ss.isValue($Serenity_FilteringTypeRegistry.$knownTypes[p])) {
				continue;
			}
			$Serenity_FilteringTypeRegistry.$knownTypes[p] = $Serenity_FilteringTypeRegistry.$knownTypes[k];
		}
	};
	global.Serenity.FilteringTypeRegistry = $Serenity_FilteringTypeRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterOperators
	var $Serenity_FilterOperators = function() {
	};
	$Serenity_FilterOperators.__typeName = 'Serenity.FilterOperators';
	global.Serenity.FilterOperators = $Serenity_FilterOperators;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterPanel
	var $Serenity_FilterPanel = function(div) {
		this.$rowsDiv = null;
		this.$showInitialLine = false;
		this.$showSearchButton = true;
		this.$updateStoreOnReset = false;
		ss.makeGenericType($Serenity_FilterWidgetBase$1, [Object]).call(this, div, null);
		this.get_element().addClass('s-FilterPanel');
		this.$rowsDiv = this.byId$1('Rows');
		this.$initButtons();
		this.$updateButtons();
	};
	$Serenity_FilterPanel.__typeName = 'Serenity.FilterPanel';
	global.Serenity.FilterPanel = $Serenity_FilterPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterPanelTest
	var $Serenity_FilterPanelTest = function() {
		Serenity.ScriptContext.call(this);
	};
	$Serenity_FilterPanelTest.__typeName = 'Serenity.FilterPanelTest';
	global.Serenity.FilterPanelTest = $Serenity_FilterPanelTest;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterStore
	var $Serenity_FilterStore = function(fields) {
		this.$changed = null;
		this.$displayText = null;
		this.$1$FieldsField = null;
		this.$1$FieldByNameField = null;
		this.$1$ItemsField = null;
		this.set_items([]);
		if (ss.isNullOrUndefined(fields)) {
			throw new ss.ArgumentNullException('source');
		}
		this.set_fields(Enumerable.from(fields).toArray());
		this.get_fields().sort(function(x, y) {
			var $t2 = Q.tryGetText(x.title);
			if (ss.isNullOrUndefined($t2)) {
				var $t1 = x.title;
				if (ss.isNullOrUndefined($t1)) {
					$t1 = x.name;
				}
				$t2 = $t1;
			}
			var $t4 = Q.tryGetText(y.title);
			if (ss.isNullOrUndefined($t4)) {
				var $t3 = y.title;
				if (ss.isNullOrUndefined($t3)) {
					$t3 = y.name;
				}
				$t4 = $t3;
			}
			return Q$Externals.turkishLocaleCompare($t2, $t4);
		});
		this.set_fieldByName({});
		var $t5 = ss.getEnumerator(fields);
		try {
			while ($t5.moveNext()) {
				var field = $t5.current();
				this.get_fieldByName()[field.name] = field;
			}
		}
		finally {
			$t5.dispose();
		}
	};
	$Serenity_FilterStore.__typeName = 'Serenity.FilterStore';
	global.Serenity.FilterStore = $Serenity_FilterStore;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FilterWidgetBase
	var $Serenity_FilterWidgetBase$1 = function(TOptions) {
		var $type = function(div, opt) {
			this.$store = null;
			ss.makeGenericType($Serenity_TemplatedWidget$1, [TOptions]).call(this, div, opt);
			this.$store = new $Serenity_FilterStore([]);
			this.$store.add_changed(ss.mkdel(this, this.$onFilterStoreChanged));
		};
		ss.registerGenericClassInstance($type, $Serenity_FilterWidgetBase$1, [TOptions], {
			destroy: function() {
				if (ss.isValue(this.$store)) {
					this.$store.remove_changed(ss.mkdel(this, this.$onFilterStoreChanged));
					this.$store = null;
				}
				$Serenity_Widget.prototype.destroy.call(this);
			},
			$onFilterStoreChanged: function(sender, e) {
				this.filterStoreChanged();
			},
			filterStoreChanged: function() {
			},
			get_store: function() {
				return this.$store;
			},
			set_store: function(value) {
				if (!ss.referenceEquals(this.$store, value)) {
					if (ss.isValue(this.$store)) {
						this.$store.remove_changed(ss.mkdel(this, this.$onFilterStoreChanged));
					}
					this.$store = value || new $Serenity_FilterStore([]);
					this.$store.add_changed(ss.mkdel(this, this.$onFilterStoreChanged));
					this.filterStoreChanged();
				}
			}
		}, function() {
			return ss.makeGenericType($Serenity_TemplatedWidget$1, [TOptions]);
		}, function() {
			return [];
		});
		return $type;
	};
	$Serenity_FilterWidgetBase$1.__typeName = 'Serenity.FilterWidgetBase$1';
	ss.initGenericClass($Serenity_FilterWidgetBase$1, $asm, 1);
	global.Serenity.FilterWidgetBase$1 = $Serenity_FilterWidgetBase$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Flexify
	var $Serenity_Flexify = function(container, options) {
		this.$xDifference = 0;
		this.$yDifference = 0;
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, container, options);
		var self = this;
		Serenity.LazyLoadHelper.executeOnceWhenShown(container, function() {
			self.$storeInitialSize();
		});
	};
	$Serenity_Flexify.__typeName = 'Serenity.Flexify';
	global.Serenity.Flexify = $Serenity_Flexify;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FlexifyExtensions
	var $Serenity_FLX = function() {
	};
	$Serenity_FLX.__typeName = 'Serenity.FLX';
	$Serenity_FLX.flexHeightOnly = function(element, flexY) {
		return element.addClass('flexify').data('flex-y', flexY).data('flex-x', 0);
	};
	$Serenity_FLX.flexWidthOnly = function(element, flexX) {
		return element.addClass('flexify').data('flex-x', flexX).data('flex-y', 0);
	};
	$Serenity_FLX.flexWidthHeight = function(element, flexX, flexY) {
		return element.addClass('flexify').data('flex-x', flexX).data('flex-y', flexY);
	};
	$Serenity_FLX.flexXFactor = function(element, flexX) {
		return element.data('flex-x', flexX);
	};
	$Serenity_FLX.flexYFactor = function(element, flexY) {
		return element.data('flex-y', flexY);
	};
	global.Serenity.FLX = $Serenity_FLX;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.FormatterTypeRegistry
	var $Serenity_FormatterTypeRegistry = function() {
	};
	$Serenity_FormatterTypeRegistry.__typeName = 'Serenity.FormatterTypeRegistry';
	$Serenity_FormatterTypeRegistry.get = function(key) {
		if (Q.isEmptyOrNull(key)) {
			throw new ss.ArgumentNullException('key');
		}
		$Serenity_FormatterTypeRegistry.$initialize();
		var formatterType = $Serenity_FormatterTypeRegistry.$knownTypes[key.toLowerCase()];
		if (ss.isNullOrUndefined(formatterType)) {
			throw new ss.Exception(ss.formatString("Can't find {0} formatter type!", key));
		}
		return formatterType;
	};
	$Serenity_FormatterTypeRegistry.$initialize = function() {
		if (ss.isValue($Serenity_FormatterTypeRegistry.$knownTypes)) {
			return;
		}
		$Serenity_FormatterTypeRegistry.$knownTypes = {};
		var $t1 = ss.getAssemblies();
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var assembly = $t1[$t2];
			var $t3 = ss.getAssemblyTypes(assembly);
			for (var $t4 = 0; $t4 < $t3.length; $t4++) {
				var type = $t3[$t4];
				if (!ss.isAssignableFrom(Serenity.ISlickFormatter, type)) {
					continue;
				}
				if (ss.isGenericTypeDefinition(type)) {
					continue;
				}
				var fullName = ss.getTypeFullName(type).toLowerCase();
				$Serenity_FormatterTypeRegistry.$knownTypes[fullName] = type;
				for (var $t5 = 0; $t5 < Q$Config.rootNamespaces.length; $t5++) {
					var k = Q$Config.rootNamespaces[$t5];
					if (ss.startsWithString(fullName, k.toLowerCase() + '.')) {
						var kx = fullName.substr(k.length + 1).toLowerCase();
						if (ss.isNullOrUndefined($Serenity_FormatterTypeRegistry.$knownTypes[kx])) {
							$Serenity_FormatterTypeRegistry.$knownTypes[kx] = type;
						}
					}
				}
			}
		}
		$Serenity_FormatterTypeRegistry.$setTypeKeysWithoutFormatterSuffix();
	};
	$Serenity_FormatterTypeRegistry.reset = function() {
		$Serenity_FormatterTypeRegistry.$knownTypes = null;
	};
	$Serenity_FormatterTypeRegistry.$setTypeKeysWithoutFormatterSuffix = function() {
		var suffix = 'formatter';
		var $t1 = Enumerable.from(Object.keys($Serenity_FormatterTypeRegistry.$knownTypes)).toArray();
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var k = $t1[$t2];
			if (!ss.endsWithString(k, suffix)) {
				continue;
			}
			var p = k.substr(0, k.length - suffix.length);
			if (Q.isEmptyOrNull(p)) {
				continue;
			}
			if (ss.isValue($Serenity_FormatterTypeRegistry.$knownTypes[p])) {
				continue;
			}
			$Serenity_FormatterTypeRegistry.$knownTypes[p] = $Serenity_FormatterTypeRegistry.$knownTypes[k];
		}
	};
	global.Serenity.FormatterTypeRegistry = $Serenity_FormatterTypeRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.GridSelectAllButtonHelper
	var $Serenity_GridSelectAllButtonHelper = function() {
	};
	$Serenity_GridSelectAllButtonHelper.__typeName = 'Serenity.GridSelectAllButtonHelper';
	$Serenity_GridSelectAllButtonHelper.update = function(TItem) {
		return function(grid, getSelected) {
			var grd = grid;
			var toolbar = grd.get_element().children('.s-Toolbar');
			if (toolbar.length === 0) {
				return;
			}
			var btn = $Serenity_WX.getWidget($Serenity_Toolbar).call(null, toolbar).findButton('select-all-button');
			var items = grd.get_view().getItems();
			btn.toggleClass('checked', items.length > 0 && !items.some(function(x) {
				return !getSelected(x);
			}));
		};
	};
	$Serenity_GridSelectAllButtonHelper.define = function(TItem) {
		return function(getGrid, getId, getSelected, setSelected, text, onClick) {
			return {
				title: ss.coalesce(text, 'Tümünü Seç'),
				cssClass: 'select-all-button',
				onClick: function() {
					var grid = getGrid();
					var view = grid.get_view();
					var btn = $Serenity_WX.getWidget($Serenity_Toolbar).call(null, grid.get_element().children('.s-Toolbar')).findButton('select-all-button');
					var makeSelected = !btn.hasClass('checked');
					view.beginUpdate();
					try {
						var $t1 = view.getItems();
						for (var $t2 = 0; $t2 < $t1.length; $t2++) {
							var item = $t1[$t2];
							setSelected(item, makeSelected);
							view.updateItem(getId(item), item);
						}
						if (!ss.staticEquals(onClick, null)) {
							onClick();
						}
					}
					finally {
						view.endUpdate();
					}
					btn.toggleClass('checked', makeSelected);
				}
			};
		};
	};
	global.Serenity.GridSelectAllButtonHelper = $Serenity_GridSelectAllButtonHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.GridUtils
	var $Serenity_GridUtils = function() {
	};
	$Serenity_GridUtils.__typeName = 'Serenity.GridUtils';
	$Serenity_GridUtils.addToggleButton = function(toolDiv, cssClass, callback, hint, initial) {
		var div = $('<div><a href="#"></a></div>').addClass('s-ToggleButton').addClass(cssClass).prependTo(toolDiv);
		div.children('a').click(function(e) {
			e.preventDefault();
			div.toggleClass('pressed');
			var pressed = div.hasClass('pressed');
			if (!ss.staticEquals(callback, null)) {
				callback(pressed);
			}
		}).attr('title', ss.coalesce(hint, ''));
		if (initial) {
			div.addClass('pressed');
		}
	};
	$Serenity_GridUtils.addIncludeDeletedToggle = function(toolDiv, view, hint, initial) {
		var includeDeleted = false;
		var oldSubmit = view.onSubmit;
		view.onSubmit = function(v) {
			v.params.IncludeDeleted = includeDeleted;
			if (!ss.staticEquals(oldSubmit, null)) {
				return oldSubmit(v);
			}
			return true;
		};
		var $t1 = hint;
		if (ss.isNullOrUndefined($t1)) {
			$t1 = Texts$Controls$EntityGrid.IncludeDeletedToggle.get();
		}
		$Serenity_GridUtils.addToggleButton(toolDiv, 's-IncludeDeletedToggle', function(pressed) {
			includeDeleted = pressed;
			view.seekToPage = 1;
			view.populate();
		}, $t1, initial);
		toolDiv.bind('remove', function() {
			view.onSubmit = null;
			oldSubmit = null;
		});
	};
	$Serenity_GridUtils.addQuickSearchInput = function(TEntity) {
		return function(toolDiv, view, fields) {
			var oldSubmit = view.onSubmit;
			var searchText = '';
			var searchField = '';
			view.onSubmit = function(v) {
				if (ss.isValue(searchText) && searchText.length > 0) {
					v.params.ContainsText = searchText;
				}
				else {
					delete v.params['ContainsText'];
				}
				if (ss.isValue(searchField) && searchField.length > 0) {
					v.params.ContainsField = searchField;
				}
				else {
					delete v.params['ContainsField'];
				}
				if (!ss.staticEquals(oldSubmit, null)) {
					return oldSubmit(v);
				}
				return true;
			};
			$Serenity_GridUtils.addQuickSearchInputCustom(toolDiv, function(field, query) {
				searchText = query;
				searchField = field;
				view.seekToPage = 1;
				view.populate();
			}, fields);
		};
	};
	$Serenity_GridUtils.addQuickSearchInputCustom = function(container, onSearch, fields) {
		var input = $('<div><input type="text"/></div>').addClass('s-QuickSearchBar').prependTo(container);
		if (ss.isValue(fields) && fields.length > 0) {
			input.addClass('has-quick-search-fields');
		}
		input = input.children();
		var $t1 = $Serenity_QuickSearchInputOptions.$ctor();
		$t1.fields = fields;
		$t1.onSearch = onSearch;
		new $Serenity_QuickSearchInput(input, $t1);
	};
	$Serenity_GridUtils.makeOrderable = function(grid, handleMove) {
		var moveRowsPlugin = new Slick.RowMoveManager({ cancelEditOnDrag: true });
		moveRowsPlugin.onBeforeMoveRows.subscribe(function(e, data) {
			for (var i = 0; !!(i < data.rows.length); i++) {
				if (!!(ss.referenceEquals(data.rows[i], data.insertBefore) || ss.referenceEquals(data.rows[i], data.insertBefore - 1))) {
					e.stopPropagation();
					return false;
				}
			}
			return true;
		});
		moveRowsPlugin.onMoveRows.subscribe(function(e1, data1) {
			var rows = ss.cast(data1.rows, Array);
			var insertBefore = ss.unbox(ss.cast(data1.insertBefore, ss.Int32));
			handleMove(rows, insertBefore);
			try {
				grid.setSelectedRows([]);
			}
			catch ($t1) {
			}
		});
		grid.registerPlugin(moveRowsPlugin);
	};
	$Serenity_GridUtils.makeOrderableWithUpdateRequest = function(TItem, TOptions) {
		return function(grid, getId, getDisplayOrder, service, getUpdateRequest) {
			$Serenity_GridUtils.makeOrderable(grid.get_slickGrid(), function(rows, insertBefore) {
				if (rows.length === 0) {
					return;
				}
				var order;
				var index = insertBefore;
				if (index < 0) {
					order = 1;
				}
				else if (insertBefore >= grid.get_view().rows.length) {
					order = ss.coalesce(getDisplayOrder(grid.get_view().rows[grid.get_view().rows.length - 1]), 0);
					if (order === 0) {
						order = insertBefore + 1;
					}
					else {
						order = order + 1;
					}
				}
				else {
					order = ss.coalesce(getDisplayOrder(grid.get_view().rows[insertBefore]), 0);
					if (order === 0) {
						order = insertBefore + 1;
					}
				}
				var i = 0;
				var next = null;
				next = function() {
					Q.serviceCall({
						service: service,
						request: getUpdateRequest(getId(grid.get_view().rows[rows[i]]), order++),
						onSuccess: function(response) {
							i++;
							if (i < rows.length) {
								next();
							}
							else {
								grid.get_view().populate();
							}
						}
					});
				};
				next();
			});
		};
	};
	global.Serenity.GridUtils = $Serenity_GridUtils;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.HtmlContentEditor
	var $Serenity_HtmlContentEditor = function(textArea, opt) {
		this.$instanceReady = false;
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_HtmlContentEditorOptions]).call(this, textArea, opt);
		$Serenity_HtmlContentEditor.$includeCKEditor();
		var id = textArea.attr('id');
		if (Q.isTrimmedEmpty(id)) {
			textArea.attr('id', this.uniqueName);
			id = this.uniqueName;
		}
		if (ss.isValue(this.options.cols)) {
			textArea.attr('cols', ss.unbox(this.options.cols).toString());
		}
		if (ss.isValue(this.options.rows)) {
			textArea.attr('rows', ss.unbox(this.options.rows).toString());
		}
		var self = this;
		var config = this.getConfig();
		CKEDITOR.replace(id, config);
		$Serenity_VX.addValidationRule(this, this.uniqueName, function(e) {
			if (e.hasClass('required')) {
				var value = Q.trimToNull(self.get_value());
				if (ss.isNullOrUndefined(value)) {
					return Q.text('Validation.Required');
				}
			}
			return null;
		});
	};
	$Serenity_HtmlContentEditor.__typeName = 'Serenity.HtmlContentEditor';
	$Serenity_HtmlContentEditor.$includeCKEditor = function() {
		var window2 = window.window;
		if (!!ss.isValue(window2.CKEDITOR)) {
			return;
		}
		var script = $('CKEditorScript');
		if (script.length > 0) {
			return;
		}
		$('<script/>').attr('type', 'text/javascript').attr('id', 'CKEditorScript').attr('src', Q.resolveUrl('~/Scripts/CKEditor/ckeditor.js')).appendTo(window.document.head);
	};
	global.Serenity.HtmlContentEditor = $Serenity_HtmlContentEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.HtmlContentEditorOptions
	var $Serenity_HtmlContentEditorOptions = function() {
	};
	$Serenity_HtmlContentEditorOptions.__typeName = 'Serenity.HtmlContentEditorOptions';
	$Serenity_HtmlContentEditorOptions.createInstance = function() {
		return $Serenity_HtmlContentEditorOptions.$ctor();
	};
	$Serenity_HtmlContentEditorOptions.$ctor = function() {
		var $this = {};
		$this.cols = null;
		$this.rows = null;
		$this.cols = 80;
		$this.rows = 6;
		return $this;
	};
	global.Serenity.HtmlContentEditorOptions = $Serenity_HtmlContentEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.HtmlReportContentEditor
	var $Serenity_HtmlReportContentEditor = function(textArea, opt) {
		$Serenity_HtmlContentEditor.call(this, textArea, opt);
	};
	$Serenity_HtmlReportContentEditor.__typeName = 'Serenity.HtmlReportContentEditor';
	global.Serenity.HtmlReportContentEditor = $Serenity_HtmlReportContentEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IAsyncInit
	var $Serenity_IAsyncInit = function() {
	};
	$Serenity_IAsyncInit.__typeName = 'Serenity.IAsyncInit';
	global.Serenity.IAsyncInit = $Serenity_IAsyncInit;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IBooleanValue
	var $Serenity_IBooleanValue = function() {
	};
	$Serenity_IBooleanValue.__typeName = 'Serenity.IBooleanValue';
	global.Serenity.IBooleanValue = $Serenity_IBooleanValue;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IDataGrid
	var $Serenity_IDataGrid = function() {
	};
	$Serenity_IDataGrid.__typeName = 'Serenity.IDataGrid';
	global.Serenity.IDataGrid = $Serenity_IDataGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IDialog
	var $Serenity_IDialog = function() {
	};
	$Serenity_IDialog.__typeName = 'Serenity.IDialog';
	global.Serenity.IDialog = $Serenity_IDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IDoubleValue
	var $Serenity_IDoubleValue = function() {
	};
	$Serenity_IDoubleValue.__typeName = 'Serenity.IDoubleValue';
	global.Serenity.IDoubleValue = $Serenity_IDoubleValue;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IEditDialog
	var $Serenity_IEditDialog = function() {
	};
	$Serenity_IEditDialog.__typeName = 'Serenity.IEditDialog';
	global.Serenity.IEditDialog = $Serenity_IEditDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IFiltering
	var $Serenity_IFiltering = function() {
	};
	$Serenity_IFiltering.__typeName = 'Serenity.IFiltering';
	global.Serenity.IFiltering = $Serenity_IFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IGetEditValue
	var $Serenity_IGetEditValue = function() {
	};
	$Serenity_IGetEditValue.__typeName = 'Serenity.IGetEditValue';
	global.Serenity.IGetEditValue = $Serenity_IGetEditValue;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ImageUploadEditor
	var $Serenity_ImageUploadEditor = function(div, opt) {
		this.entity = null;
		this.toolbar = null;
		this.fileSymbols = null;
		this.uploadInput = null;
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_ImageUploadEditorOptions]).call(this, div, opt);
		div.addClass('s-ImageUploadEditor');
		if (Q.isEmptyOrNull(this.options.originalNameProperty)) {
			div.addClass('hide-original-name');
		}
		var self = this;
		this.toolbar = new $Serenity_Toolbar($('<div/>').appendTo(this.get_element()), { buttons: this.getToolButtons() });
		var progress = $('<div><div></div></div>').addClass('upload-progress').prependTo(this.toolbar.get_element());
		var addFileButton = this.toolbar.findButton('add-file-button');
		this.uploadInput = $Serenity_UploadHelper.addUploadInput({ container: addFileButton, inputName: this.uniqueName, progress: progress, fileDone: ss.mkdel(this, function(response, name, data) {
			if (!$Serenity_UploadHelper.checkImageConstraints(response, this.options)) {
				return;
			}
			var newEntity = { OriginalName: name, Filename: response.TemporaryFile };
			self.entity = newEntity;
			self.populate();
			self.updateInterface();
		}) });
		this.fileSymbols = $('<ul/>').appendTo(this.element);
		this.updateInterface();
	};
	$Serenity_ImageUploadEditor.__typeName = 'Serenity.ImageUploadEditor';
	global.Serenity.ImageUploadEditor = $Serenity_ImageUploadEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ImageUploadEditorOptions
	var $Serenity_ImageUploadEditorOptions = function() {
	};
	$Serenity_ImageUploadEditorOptions.__typeName = 'Serenity.ImageUploadEditorOptions';
	$Serenity_ImageUploadEditorOptions.createInstance = function() {
		return $Serenity_ImageUploadEditorOptions.$ctor();
	};
	$Serenity_ImageUploadEditorOptions.$ctor = function() {
		var $this = {};
		$this.minWidth = 0;
		$this.maxWidth = 0;
		$this.minHeight = 0;
		$this.maxHeight = 0;
		$this.minSize = 0;
		$this.maxSize = 0;
		$this.originalNameProperty = null;
		$this.urlPrefix = null;
		$this.allowNonImage = false;
		return $this;
	};
	global.Serenity.ImageUploadEditorOptions = $Serenity_ImageUploadEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IntegerEditor
	var $Serenity_IntegerEditor = function(input, opt) {
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_IntegerEditorOptions]).call(this, input, opt);
		input.addClass('decimalQ');
		var numericOptions = $.extend($Serenity_DecimalEditor.defaultAutoNumericOptions(), { vMin: this.options.minValue, vMax: this.options.maxValue, aSep: null });
		input.autoNumeric(numericOptions);
	};
	$Serenity_IntegerEditor.__typeName = 'Serenity.IntegerEditor';
	global.Serenity.IntegerEditor = $Serenity_IntegerEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IntegerEditorOptions
	var $Serenity_IntegerEditorOptions = function() {
	};
	$Serenity_IntegerEditorOptions.__typeName = 'Serenity.IntegerEditorOptions';
	$Serenity_IntegerEditorOptions.createInstance = function() {
		return $Serenity_IntegerEditorOptions.$ctor();
	};
	$Serenity_IntegerEditorOptions.$ctor = function() {
		var $this = {};
		$this.minValue = 0;
		$this.maxValue = 0;
		$this.minValue = 0;
		$this.maxValue = 2147483647;
		return $this;
	};
	global.Serenity.IntegerEditorOptions = $Serenity_IntegerEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IntegerFiltering
	var $Serenity_IntegerFiltering = function() {
		ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_IntegerEditor]).call(this);
	};
	$Serenity_IntegerFiltering.__typeName = 'Serenity.IntegerFiltering';
	global.Serenity.IntegerFiltering = $Serenity_IntegerFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IReadOnly
	var $Serenity_IReadOnly = function() {
	};
	$Serenity_IReadOnly.__typeName = 'Serenity.IReadOnly';
	global.Serenity.IReadOnly = $Serenity_IReadOnly;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ISetEditValue
	var $Serenity_ISetEditValue = function() {
	};
	$Serenity_ISetEditValue.__typeName = 'Serenity.ISetEditValue';
	global.Serenity.ISetEditValue = $Serenity_ISetEditValue;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IStringValue
	var $Serenity_IStringValue = function() {
	};
	$Serenity_IStringValue.__typeName = 'Serenity.IStringValue';
	global.Serenity.IStringValue = $Serenity_IStringValue;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.IValidateRequired
	var $Serenity_IValidateRequired = function() {
	};
	$Serenity_IValidateRequired.__typeName = 'Serenity.IValidateRequired';
	global.Serenity.IValidateRequired = $Serenity_IValidateRequired;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.JsRender
	var $Serenity_JsRender = function() {
	};
	$Serenity_JsRender.__typeName = 'Serenity.JsRender';
	$Serenity_JsRender.render = function(markup, data) {
		if (ss.isNullOrUndefined(markup) || markup.indexOf('{{') < 0) {
			return markup;
		}
		if (!!(ss.isNullOrUndefined($.templates) || ss.isNullOrUndefined($.views))) {
			throw new ss.Exception('Please make sure that jsrender.js is included in the page!');
		}
		var $t1 = data;
		if (ss.isNullOrUndefined($t1)) {
			$t1 = {};
		}
		data = $t1;
		var template = $.templates(markup);
		$.views.converters({
			text: function(s) {
				return Q.text(s);
			}
		}, template);
		return ss.cast(template.render(data), String);
	};
	global.Serenity.JsRender = $Serenity_JsRender;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.LookupEditor
	var $Serenity_LookupEditor = function(hidden, opt) {
		ss.makeGenericType($Serenity_LookupEditorBase$2, [$Serenity_LookupEditorOptions, Object]).call(this, hidden, opt);
	};
	$Serenity_LookupEditor.__typeName = 'Serenity.LookupEditor';
	global.Serenity.LookupEditor = $Serenity_LookupEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.LookupEditorBase
	var $Serenity_LookupEditorBase$1 = function(TItem) {
		var $type = function(hidden) {
			ss.makeGenericType($Serenity_LookupEditorBase$2, [Object, TItem]).call(this, hidden, null);
		};
		ss.registerGenericClassInstance($type, $Serenity_LookupEditorBase$1, [TItem], {}, function() {
			return ss.makeGenericType($Serenity_LookupEditorBase$2, [Object, TItem]);
		}, function() {
			return [$Serenity_IStringValue];
		});
		return $type;
	};
	$Serenity_LookupEditorBase$1.__typeName = 'Serenity.LookupEditorBase$1';
	ss.initGenericClass($Serenity_LookupEditorBase$1, $asm, 1);
	global.Serenity.LookupEditorBase$1 = $Serenity_LookupEditorBase$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.LookupEditorBase
	var $Serenity_LookupEditorBase$2 = function(TOptions, TItem) {
		var $type = function(hidden, opt) {
			ss.makeGenericType($Serenity_Select2Editor$2, [TOptions, TItem]).call(this, hidden, opt);
			var self = this;
			if (!this.isAsyncWidget()) {
				this.updateItems();
				Q$ScriptData.bindToChange('Lookup.' + this.getLookupKey(), this.uniqueName, function() {
					self.updateItems();
				});
			}
		};
		ss.registerGenericClassInstance($type, $Serenity_LookupEditorBase$2, [TOptions, TItem], {
			initializeAsync: function() {
				return this.updateItemsAsync().then(ss.mkdel(this, function() {
					Q$ScriptData.bindToChange('Lookup.' + this.getLookupKey(), this.uniqueName, ss.mkdel(this, function() {
						this.updateItemsAsync();
					}));
				}), null);
			},
			destroy: function() {
				Q$ScriptData.unbindFromChange(this.uniqueName);
				this.element.select2('destroy');
				$Serenity_Widget.prototype.destroy.call(this);
			},
			getLookupKey: function() {
				var key = ss.getTypeFullName(ss.getInstanceType(this));
				var idx = key.indexOf('.');
				if (idx >= 0) {
					key = key.substring(idx + 1);
				}
				if (ss.endsWithString(key, 'Editor')) {
					key = key.substr(0, key.length - 6);
				}
				return key;
			},
			getLookup: function() {
				return Q.getLookup(this.getLookupKey());
			},
			getLookupAsync: function() {
				return RSVP.resolve().then(ss.mkdel(this, function() {
					var key = this.getLookupKey();
					return Q.getLookupAsync(key);
				}), null);
			},
			getItems: function(lookup) {
				return lookup.get_items();
			},
			getItemText: function(item, lookup) {
				var textValue = (!ss.staticEquals(lookup.get_textFormatter(), null) ? lookup.get_textFormatter()(item) : item[lookup.get_textField()]);
				return (ss.isNullOrUndefined(textValue) ? '' : textValue.toString());
			},
			getItemDisabled: function(item, lookup) {
				return false;
			},
			updateItems: function() {
				var lookup = this.getLookup();
				this.clearItems();
				var items = this.getItems(lookup);
				var $t1 = ss.getEnumerator(items);
				try {
					while ($t1.moveNext()) {
						var item = $t1.current();
						var text = this.getItemText(ss.cast(item, TItem), lookup);
						var disabled = this.getItemDisabled(ss.cast(item, TItem), lookup);
						var idValue = item[lookup.get_idField()];
						var id = (ss.isNullOrUndefined(idValue) ? '' : idValue.toString());
						this.items.push({ id: id, text: ss.cast(text, String), source: item, disabled: !!disabled });
					}
				}
				finally {
					$t1.dispose();
				}
			},
			updateItemsAsync: function() {
				return this.getLookupAsync().then(ss.mkdel(this, function(lookup) {
					this.clearItems();
					var items = this.getItems(lookup);
					var $t1 = ss.getEnumerator(items);
					try {
						while ($t1.moveNext()) {
							var item = $t1.current();
							var text = this.getItemText(ss.cast(item, TItem), lookup);
							var disabled = this.getItemDisabled(ss.cast(item, TItem), lookup);
							var idValue = item[lookup.get_idField()];
							var id = (ss.isNullOrUndefined(idValue) ? '' : idValue.toString());
							this.items.push({ id: id, text: ss.cast(text, String), source: item, disabled: !!disabled });
						}
					}
					finally {
						$t1.dispose();
					}
				}), null);
			}
		}, function() {
			return ss.makeGenericType($Serenity_Select2Editor$2, [TOptions, TItem]);
		}, function() {
			return [$Serenity_IStringValue];
		});
		ss.setMetadata($type, { attr: [new Serenity.ElementAttribute('<input type="hidden"/>')] });
		return $type;
	};
	$Serenity_LookupEditorBase$2.__typeName = 'Serenity.LookupEditorBase$2';
	ss.initGenericClass($Serenity_LookupEditorBase$2, $asm, 2);
	global.Serenity.LookupEditorBase$2 = $Serenity_LookupEditorBase$2;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.LookupEditorOptions
	var $Serenity_LookupEditorOptions = function() {
	};
	$Serenity_LookupEditorOptions.__typeName = 'Serenity.LookupEditorOptions';
	$Serenity_LookupEditorOptions.createInstance = function() {
		return $Serenity_LookupEditorOptions.$ctor();
	};
	$Serenity_LookupEditorOptions.$ctor = function() {
		var $this = {};
		$this.lookupKey = null;
		$this.minimumResultsForSearch = null;
		return $this;
	};
	global.Serenity.LookupEditorOptions = $Serenity_LookupEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.LookupFiltering
	var $Serenity_LookupFiltering = function() {
		ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_LookupEditor]).call(this);
	};
	$Serenity_LookupFiltering.__typeName = 'Serenity.LookupFiltering';
	global.Serenity.LookupFiltering = $Serenity_LookupFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.MaskedEditor
	var $Serenity_MaskedEditor = function(input, opt) {
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_MaskedEditorOptions]).call(this, input, opt);
		input.mask(this.options.mask, { placeholder: this.options.placeholder });
	};
	$Serenity_MaskedEditor.__typeName = 'Serenity.MaskedEditor';
	global.Serenity.MaskedEditor = $Serenity_MaskedEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.MaskedEditorOptions
	var $Serenity_MaskedEditorOptions = function() {
	};
	$Serenity_MaskedEditorOptions.__typeName = 'Serenity.MaskedEditorOptions';
	$Serenity_MaskedEditorOptions.createInstance = function() {
		return $Serenity_MaskedEditorOptions.$ctor();
	};
	$Serenity_MaskedEditorOptions.$ctor = function() {
		var $this = {};
		$this.mask = null;
		$this.placeholder = null;
		$this.mask = '';
		$this.placeholder = '_';
		return $this;
	};
	global.Serenity.MaskedEditorOptions = $Serenity_MaskedEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.MultipleImageUploadEditor
	var $Serenity_MultipleImageUploadEditor = function(div, opt) {
		this.entities = null;
		this.toolbar = null;
		this.fileSymbols = null;
		this.uploadInput = null;
		this.$4$JsonEncodeValueField = false;
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_ImageUploadEditorOptions]).call(this, div, opt);
		this.entities = [];
		div.addClass('s-MultipleImageUploadEditor');
		var self = this;
		this.toolbar = new $Serenity_Toolbar($('<div/>').appendTo(this.get_element()), { buttons: this.getToolButtons() });
		var progress = $('<div><div></div></div>').addClass('upload-progress').prependTo(this.toolbar.get_element());
		var addFileButton = this.toolbar.findButton('add-file-button');
		this.uploadInput = $Serenity_UploadHelper.addUploadInput({ container: addFileButton, inputName: this.uniqueName, progress: progress, fileDone: ss.mkdel(this, function(response, name, data) {
			if (!$Serenity_UploadHelper.checkImageConstraints(response, this.options)) {
				return;
			}
			var newEntity = { OriginalName: name, Filename: response.TemporaryFile };
			self.entities.push(newEntity);
			self.populate();
			self.updateInterface();
		}) });
		this.fileSymbols = $('<ul/>').appendTo(this.element);
		this.updateInterface();
	};
	$Serenity_MultipleImageUploadEditor.__typeName = 'Serenity.MultipleImageUploadEditor';
	global.Serenity.MultipleImageUploadEditor = $Serenity_MultipleImageUploadEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PasswordEditor
	var $Serenity_PasswordEditor = function(input) {
		$Serenity_StringEditor.call(this, input);
		input.attr('type', 'password');
	};
	$Serenity_PasswordEditor.__typeName = 'Serenity.PasswordEditor';
	global.Serenity.PasswordEditor = $Serenity_PasswordEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PersonNameEditor
	var $Serenity_PersonNameEditor = function(input) {
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, input, new Object());
		$Serenity_VX.addValidationRule(this, this.uniqueName, ss.mkdel(this, function() {
			if (!(new RegExp('^[ A-Za-zıİğĞöÖüÜşŞÇç]+$')).test(Q.trimToEmpty(this.get_value()))) {
				return 'Lütfen sadece harflerden oluşan bir metin giriniz!';
			}
			return null;
		}));
	};
	$Serenity_PersonNameEditor.__typeName = 'Serenity.PersonNameEditor';
	global.Serenity.PersonNameEditor = $Serenity_PersonNameEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PhoneEditor
	var $Serenity_PhoneEditor = function(input, opt) {
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_PhoneEditorOptions]).call(this, input, opt);
		var self = this;
		$Serenity_VX.addValidationRule(this, this.uniqueName, ss.mkdel(this, function(e) {
			var value = Q.trimToNull(this.get_value());
			if (ss.isNullOrUndefined(value)) {
				return null;
			}
			return this.validate(value);
		}));
		var hint = (this.options.internal ? "Dahili telefon numarası '456, 8930, 12345' formatlarında" : (this.options.mobile ? "Cep telefonu numarası '(533) 342 01 89' formatında" : "Telefon numarası '(216) 432 10 98' formatında"));
		if (this.options.multiple) {
			hint = ss.replaceAllString(hint, 'numarası', 'numaraları') + ' ve birden fazlaysa virgülle ayrılarak ';
		}
		hint += ' girilmelidir.';
		input.attr('title', hint);
		input.bind('change', ss.mkdel(this, function(e1) {
			if (!$Serenity_WX.hasOriginalEvent(e1)) {
				return;
			}
			this.formatValue();
		}));
		input.bind('blur', ss.mkdel(this, function(e2) {
			if (this.element.hasClass('valid')) {
				this.formatValue();
			}
		}));
		input.bind('keyup', ss.mkdel(this, function(e3) {
			if (this.options.internal) {
				return;
			}
			var val = ss.coalesce(input.val(), '');
			if (!!(val.length > 0 && ss.referenceEquals(input[0].selectionEnd, val.length) && (e3.which >= 48 && e3.which <= 57 || e3.which >= 96 && e3.which <= 105) && val.charCodeAt(val.length - 1) >= 48 && val.charCodeAt(val.length - 1) <= 57 && !ss.startsWithString(val, '+') && val.indexOf(String.fromCharCode(47)) < 0)) {
				if (ss.isNullOrUndefined(this.validate(val))) {
					this.formatValue();
				}
				else {
					for (var i = 1; i <= 7; i++) {
						val += '9';
						if (ss.isNullOrUndefined(this.validate(val))) {
							this.set_value(val);
							this.formatValue();
							val = this.get_value();
							for (var j = 1; j <= i; j++) {
								val = val.trim();
								val = val.substr(0, val.length - 1);
							}
							this.set_value(val);
							break;
						}
					}
				}
			}
		}));
	};
	$Serenity_PhoneEditor.__typeName = 'Serenity.PhoneEditor';
	$Serenity_PhoneEditor.$formatMulti = function(phone, format) {
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var result = '';
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (result.length > 0) {
				result += ', ';
			}
			result += format(s);
		}
		return result;
	};
	$Serenity_PhoneEditor.$formatPhoneTurkey = function(phone) {
		if (!$Serenity_PhoneEditor.$isValidPhoneTurkey(phone)) {
			return phone;
		}
		phone = ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '(', ''), ')', '');
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + ' ' + phone.substr(6, 2) + ' ' + phone.substr(8, 2);
		return phone;
	};
	$Serenity_PhoneEditor.$formatPhoneTurkeyMulti = function(phone) {
		if (!$Serenity_PhoneEditor.$isValidPhoneTurkeyMulti(phone)) {
			return phone;
		}
		return $Serenity_PhoneEditor.$formatMulti(phone, $Serenity_PhoneEditor.$formatPhoneTurkey);
	};
	$Serenity_PhoneEditor.$formatMobileTurkey = function(phone) {
		if (!$Serenity_PhoneEditor.$isValidMobileTurkey(phone)) {
			return phone;
		}
		return $Serenity_PhoneEditor.$formatPhoneTurkey(phone);
	};
	$Serenity_PhoneEditor.$formatMobileTurkeyMulti = function(phone) {
		if (!$Serenity_PhoneEditor.$isValidMobileTurkeyMulti(phone)) {
			return phone;
		}
		return $Serenity_PhoneEditor.$formatPhoneTurkeyMulti(phone);
	};
	$Serenity_PhoneEditor.$formatPhoneInternal = function(phone) {
		if (!$Serenity_PhoneEditor.$isValidPhoneInternal(phone)) {
			return phone;
		}
		return phone.trim();
	};
	$Serenity_PhoneEditor.$formatPhoneInternalMulti = function(phone) {
		if (!$Serenity_PhoneEditor.$isValidPhoneInternalMulti(phone)) {
			return phone;
		}
		return $Serenity_PhoneEditor.$formatMulti(phone, $Serenity_PhoneEditor.$formatPhoneInternal);
	};
	$Serenity_PhoneEditor.$isValidPhoneTurkeyMulti = function(phone) {
		return $Serenity_PhoneEditor.$isValidMulti(phone, $Serenity_PhoneEditor.$isValidPhoneTurkey);
	};
	$Serenity_PhoneEditor.$isValidMobileTurkeyMulti = function(phone) {
		return $Serenity_PhoneEditor.$isValidMulti(phone, $Serenity_PhoneEditor.$isValidMobileTurkey);
	};
	$Serenity_PhoneEditor.$isValidPhoneInternalMulti = function(phone) {
		return $Serenity_PhoneEditor.$isValidMulti(phone, $Serenity_PhoneEditor.$isValidPhoneInternal);
	};
	$Serenity_PhoneEditor.$validate = function(phone, isMultiple, isInternal, isMobile, allowInternational, allowExtension) {
		var validateFunc;
		if (isInternal) {
			validateFunc = $Serenity_PhoneEditor.$isValidPhoneInternal;
		}
		else if (isMobile) {
			validateFunc = $Serenity_PhoneEditor.$isValidMobileTurkey;
		}
		else {
			validateFunc = $Serenity_PhoneEditor.$isValidPhoneTurkey;
		}
		var myValidateFunc = function(s) {
			if (!validateFunc(s)) {
				if (isInternal) {
					return false;
				}
				s = ss.coalesce(s, '').trim();
				if (ss.startsWithString(s, '+')) {
					if (allowInternational && s.length > 7) {
						return true;
					}
					return false;
				}
				if (allowExtension && s.indexOf(String.fromCharCode(47)) > 0) {
					var p = ss.netSplit(s, [47].map(function(i) {
						return String.fromCharCode(i);
					}));
					if (p.length !== 2) {
						return false;
					}
					if (p[0].length < 5 || !validateFunc(p[0])) {
						return false;
					}
					var x = {};
					if (!ss.Int32.tryParse(p[1].trim(), x)) {
						return false;
					}
					return true;
				}
				return false;
			}
			return true;
		};
		var valid = (isMultiple ? $Serenity_PhoneEditor.$isValidMulti(phone, myValidateFunc) : myValidateFunc(phone));
		if (valid) {
			return null;
		}
		if (isMultiple) {
			if (isInternal) {
				return "Dahili telefon numaraları '4567' formatında ve birden fazlaysa virgülle ayrılarak girilmelidir!";
			}
			if (isMobile) {
				return "Telefon numaraları '(533) 342 01 89' formatında ve birden fazlaysa virgülle ayrılarak girilmelidir!";
			}
			return "Telefon numaları '(216) 432 10 98' formatında ve birden fazlaysa virgülle ayrılarak girilmelidir!";
		}
		else {
			if (isInternal) {
				return "Dahili telefon numarası '4567' formatında girilmelidir!";
			}
			if (isMobile) {
				return "Telefon numarası '(533) 342 01 89' formatında girilmelidir!";
			}
			return "Telefon numarası '(216) 432 10 98' formatında girilmelidir!";
		}
	};
	$Serenity_PhoneEditor.$isValidPhoneTurkey = function(phone) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		phone = ss.replaceAllString(phone, ' ', '');
		if (phone.length < 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		if (ss.startsWithString(phone, '(') && phone.charCodeAt(4) === 41) {
			phone = phone.substr(1, 3) + phone.substring(5);
		}
		if (phone.length !== 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			return false;
		}
		for (var i = 0; i < phone.length; i++) {
			var c = phone.charCodeAt(i);
			if (c < 48 || c > 57) {
				return false;
			}
		}
		return true;
	};
	$Serenity_PhoneEditor.$isValidMobileTurkey = function(phone) {
		if (!$Serenity_PhoneEditor.$isValidPhoneTurkey(phone)) {
			return false;
		}
		phone = ss.trimStartString(phone);
		phone = ss.replaceAllString(phone, ' ', '');
		var lookIndex = 0;
		if (ss.startsWithString(phone, '0')) {
			lookIndex++;
		}
		if (phone.charCodeAt(lookIndex) === 53 || phone.charCodeAt(lookIndex) === 40 && phone.charCodeAt(lookIndex + 1) === 53) {
			return true;
		}
		return false;
	};
	$Serenity_PhoneEditor.$isValidPhoneInternal = function(phone) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		phone = phone.trim();
		if (phone.length < 2 || phone.length > 5) {
			return false;
		}
		for (var i = 0; i < phone.length; i++) {
			var c = phone.charCodeAt(i);
			if (c < 48 || c > 57) {
				return false;
			}
		}
		return true;
	};
	$Serenity_PhoneEditor.$isValidMulti = function(phone, check) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var anyValid = false;
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (!check(s)) {
				return false;
			}
			anyValid = true;
		}
		if (!anyValid) {
			return false;
		}
		return true;
	};
	global.Serenity.PhoneEditor = $Serenity_PhoneEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PhoneEditorOptions
	var $Serenity_PhoneEditorOptions = function() {
	};
	$Serenity_PhoneEditorOptions.__typeName = 'Serenity.PhoneEditorOptions';
	$Serenity_PhoneEditorOptions.createInstance = function() {
		return $Serenity_PhoneEditorOptions.$ctor();
	};
	$Serenity_PhoneEditorOptions.$ctor = function() {
		var $this = {};
		$this.multiple = false;
		$this.internal = false;
		$this.mobile = false;
		$this.allowExtension = false;
		$this.allowInternational = false;
		return $this;
	};
	global.Serenity.PhoneEditorOptions = $Serenity_PhoneEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PopupMenuButton
	var $Serenity_PopupMenuButton = function(div, opt) {
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, div, opt);
		var self = this;
		div.addClass('s-PopupMenuButton');
		div.click(ss.mkdel(this, function(e) {
			e.preventDefault();
			e.stopPropagation();
			if (!ss.staticEquals(this.options.onPopup, null)) {
				this.options.onPopup();
			}
			var menu = self.options.menu;
			menu.show().position({ my: ss.coalesce(this.options.positionMy, 'left top'), at: ss.coalesce(this.options.positionAt, 'left bottom'), of: self.element });
			var uq = self.uniqueName;
			$(document).one('click.' + uq, function(x) {
				menu.hide();
			});
		}));
		self.options.menu.hide().appendTo(document.body).addClass('s-PopupMenu').menu();
	};
	$Serenity_PopupMenuButton.__typeName = 'Serenity.PopupMenuButton';
	global.Serenity.PopupMenuButton = $Serenity_PopupMenuButton;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PopupToolButton
	var $Serenity_PopupToolButton = function(div, opt) {
		$Serenity_PopupMenuButton.call(this, div, opt);
		div.addClass('s-PopupToolButton');
		$('<b/>').appendTo(div.children('.button-outer').children('span'));
	};
	$Serenity_PopupToolButton.__typeName = 'Serenity.PopupToolButton';
	global.Serenity.PopupToolButton = $Serenity_PopupToolButton;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PrefixedContext
	var $Serenity_PrefixedContext = function(idPrefix) {
		this.$idPrefix = null;
		Serenity.ScriptContext.call(this);
		this.$idPrefix = idPrefix;
	};
	$Serenity_PrefixedContext.__typeName = 'Serenity.PrefixedContext';
	global.Serenity.PrefixedContext = $Serenity_PrefixedContext;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PropertyDialog
	var $Serenity_PropertyDialog$1 = function(TEntity) {
		var $type = function() {
			ss.makeGenericType($Serenity_PropertyDialog$2, [TEntity, Object]).$ctor1.call(this, null);
		};
		ss.registerGenericClassInstance($type, $Serenity_PropertyDialog$1, [TEntity], {}, function() {
			return ss.makeGenericType($Serenity_PropertyDialog$2, [TEntity, Object]);
		}, function() {
			return [$Serenity_IDialog];
		});
		return $type;
	};
	$Serenity_PropertyDialog$1.__typeName = 'Serenity.PropertyDialog$1';
	ss.initGenericClass($Serenity_PropertyDialog$1, $asm, 1);
	global.Serenity.PropertyDialog$1 = $Serenity_PropertyDialog$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PropertyDialog
	var $Serenity_PropertyDialog$2 = function(TEntity, TOptions) {
		var $type = function() {
			$type.$ctor2.call(this, Q.newBodyDiv(), null);
		};
		$type.$ctor1 = function(opt) {
			$type.$ctor2.call(this, Q.newBodyDiv(), opt);
		};
		$type.$ctor2 = function(div, opt) {
			this.$entity = null;
			this.$entityId = null;
			this.propertyGrid = null;
			ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]).$ctor2.call(this, div, opt);
			if (!this.isAsyncWidget()) {
				this.$initPropertyGrid();
				this.loadInitialEntity();
			}
		};
		ss.registerGenericClassInstance($type, $Serenity_PropertyDialog$2, [TEntity, TOptions], {
			initializeAsync: function() {
				return $Serenity_Widget.prototype.initializeAsync.call(this).then(ss.mkdel(this, this.$initPropertyGridAsync), null).then(ss.mkdel(this, function() {
					this.loadInitialEntity();
				}), null);
			},
			loadInitialEntity: function() {
				if (ss.isValue(this.propertyGrid)) {
					this.propertyGrid.load(new Object());
				}
			},
			getDialogOptions: function() {
				var opt = ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]).prototype.getDialogOptions.call(this);
				opt.buttons = this.getDialogButtons();
				opt.width = 400;
				opt.title = this.getDialogTitle();
				return opt;
			},
			getDialogTitle: function() {
				return '';
			},
			okClick: function() {
				if (!this.validateBeforeSave()) {
					return;
				}
				this.okClickValidated();
			},
			okClickValidated: function() {
				this.dialogClose();
			},
			cancelClick: function() {
				this.dialogClose();
			},
			getDialogButtons: function() {
				var $t1 = [];
				$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, this.okClick) });
				$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.cancelClick) });
				return $t1;
			},
			destroy: function() {
				if (ss.isValue(this.propertyGrid)) {
					this.propertyGrid.destroy();
					this.propertyGrid = null;
				}
				if (ss.isValue(this.validator)) {
					this.byId$1('Form').remove();
					this.validator = null;
				}
				ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]).prototype.destroy.call(this);
			},
			get_entity: function() {
				return this.$entity;
			},
			set_entity: function(value) {
				this.$entity = value || ss.createInstance(TEntity);
			},
			get_entityId: function() {
				return this.$entityId;
			},
			set_entityId: function(value) {
				this.$entityId = value;
			},
			updateTitle: function() {
			},
			onDialogOpen: function() {
				ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]).prototype.onDialogOpen.call(this);
			},
			getTemplateName: function() {
				var templateName = ss.makeGenericType($Serenity_TemplatedWidget$1, [TOptions]).prototype.getTemplateName.call(this);
				if (!Q.canLoadScriptData('Template.' + templateName) && Q.canLoadScriptData('Template.PropertyDialog')) {
					return 'PropertyDialog';
				}
				return templateName;
			},
			$initPropertyGrid: function() {
				var pgDiv = this.byId$1('PropertyGrid');
				if (pgDiv.length <= 0) {
					return;
				}
				var pgOptions = this.getPropertyGridOptions();
				this.propertyGrid = (new $Serenity_PropertyGrid(pgDiv, pgOptions)).init(null);
				if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
					$Serenity_FLX.flexHeightOnly(this.propertyGrid.get_element().children('.categories'), 1);
				}
			},
			$initPropertyGridAsync: function() {
				return RSVP.resolve().then(ss.mkdel(this, function() {
					var pgDiv = this.byId$1('PropertyGrid');
					if (pgDiv.length <= 0) {
						return RSVP.resolve();
					}
					return this.getPropertyGridOptionsAsync().then(ss.mkdel(this, function(pgOptions) {
						this.propertyGrid = new $Serenity_PropertyGrid(pgDiv, pgOptions);
						if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
							$Serenity_FLX.flexHeightOnly(this.propertyGrid.get_element().children('.categories'), 1);
						}
						return this.propertyGrid.initialize();
					}), null);
				}), null);
			},
			getFormKey: function() {
				var attributes = ss.getAttributes(ss.getInstanceType(this), Serenity.FormKeyAttribute, true);
				if (attributes.length >= 1) {
					return attributes[0].get_value();
				}
				else {
					var name = ss.getTypeFullName(ss.getInstanceType(this));
					var px = name.indexOf('.');
					if (px >= 0) {
						name = name.substring(px + 1);
					}
					if (ss.endsWithString(name, 'Dialog')) {
						name = name.substr(0, name.length - 6);
					}
					else if (ss.endsWithString(name, 'Panel')) {
						name = name.substr(0, name.length - 5);
					}
					return name;
				}
			},
			getPropertyItems: function() {
				var formKey = this.getFormKey();
				return Q.getForm(formKey);
			},
			getPropertyItemsAsync: function() {
				return RSVP.resolve().then(ss.mkdel(this, function() {
					var formKey = this.getFormKey();
					return Q.getFormAsync(formKey);
				}), null);
			},
			getPropertyGridOptions: function() {
				var $t1 = $Serenity_PropertyGridOptions.$ctor();
				$t1.idPrefix = this.idPrefix;
				$t1.items = this.getPropertyItems();
				$t1.mode = 0;
				$t1.useCategories = false;
				$t1.localTextPrefix = 'Forms.' + this.getFormKey() + '.';
				return $t1;
			},
			getPropertyGridOptionsAsync: function() {
				return this.getPropertyItemsAsync().then(ss.mkdel(this, function(propertyItems) {
					var $t1 = $Serenity_PropertyGridOptions.$ctor();
					$t1.idPrefix = this.idPrefix;
					$t1.items = propertyItems;
					$t1.mode = 0;
					$t1.useCategories = false;
					$t1.localTextPrefix = 'Forms.' + this.getFormKey() + '.';
					return $t1;
				}), null);
			},
			validateBeforeSave: function() {
				return this.validator.form();
			},
			getSaveEntity: function() {
				var entity = ss.createInstance(TEntity);
				if (ss.isValue(this.propertyGrid)) {
					this.propertyGrid.save(entity);
				}
				return entity;
			}
		}, function() {
			return ss.makeGenericType($Serenity_TemplatedDialog$1, [TOptions]);
		}, function() {
			return [$Serenity_IDialog];
		});
		$type.$ctor1.prototype = $type.$ctor2.prototype = $type.prototype;
		return $type;
	};
	$Serenity_PropertyDialog$2.__typeName = 'Serenity.PropertyDialog$2';
	ss.initGenericClass($Serenity_PropertyDialog$2, $asm, 2);
	global.Serenity.PropertyDialog$2 = $Serenity_PropertyDialog$2;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PropertyEditorHelper
	var $Serenity_PropertyEditorHelper = function() {
		$Serenity_PropertyItemHelper.call(this);
	};
	$Serenity_PropertyEditorHelper.__typeName = 'Serenity.PropertyEditorHelper';
	global.Serenity.PropertyEditorHelper = $Serenity_PropertyEditorHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PropertyGrid
	var $Serenity_PropertyGrid = function(div, opt) {
		this.$editors = null;
		this.$items = null;
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_PropertyGridOptions]).call(this, div, opt);
		if (!ss.isValue(opt.mode)) {
			opt.mode = 0;
		}
		this.$items = this.options.items || [];
		div.addClass('s-PropertyGrid');
		this.$editors = [];
		var categoryIndexes = {};
		var categoriesDiv = div;
		if (this.options.useCategories) {
			var linkContainer = $('<div/>').addClass('category-links');
			categoryIndexes = this.$createCategoryLinks(linkContainer, this.$items);
			if (ss.getKeyCount(categoryIndexes) > 1) {
				linkContainer.appendTo(div);
			}
			else {
				linkContainer.find('a.category-link').unbind('click', $Serenity_PropertyGrid.$categoryLinkClick).remove();
			}
			categoriesDiv = $('<div/>').addClass('categories').appendTo(div);
		}
		var fieldContainer = categoriesDiv;
		var priorCategory = null;
		for (var i = 0; i < this.$items.length; i++) {
			var item = this.$items[i];
			if (this.options.useCategories && !ss.referenceEquals(priorCategory, item.category)) {
				var categoryDiv = this.$createCategoryDiv(categoriesDiv, categoryIndexes, item.category);
				if (ss.isNullOrUndefined(priorCategory)) {
					categoryDiv.addClass('first-category');
				}
				priorCategory = item.category;
				fieldContainer = categoryDiv;
			}
			var editor = this.$createField(fieldContainer, item);
			this.$editors[i] = editor;
		}
		this.$updateReadOnly();
	};
	$Serenity_PropertyGrid.__typeName = 'Serenity.PropertyGrid';
	$Serenity_PropertyGrid.$categoryLinkClick = function(e) {
		e.preventDefault();
		var title = $('a[name=' + e.target.getAttribute('href').toString().substr(1) + ']');
		var animate = function() {
			title.fadeTo(100, 0.5, function() {
				title.fadeTo(100, 1, function() {
				});
			});
		};
		var intoView = title.closest('.category');
		if (intoView.closest(':scrollable(both)').length === 0) {
			animate();
		}
		else {
			intoView.scrollintoview({ duration: 'fast', direction: 'y', complete: animate });
		}
	};
	$Serenity_PropertyGrid.loadEditorValue = function(editor, item, source) {
		var setEditValue = ss.safeCast(editor, $Serenity_ISetEditValue);
		if (ss.isValue(setEditValue)) {
			setEditValue.setEditValue(source, item);
		}
		var stringValue = ss.safeCast(editor, $Serenity_IStringValue);
		if (ss.isValue(stringValue)) {
			var value = source[item.name];
			if (!!ss.isValue(value)) {
				value = value.toString();
			}
			stringValue.set_value(ss.cast(value, String));
		}
		else {
			var booleanValue = ss.safeCast(editor, $Serenity_IBooleanValue);
			if (ss.isValue(booleanValue)) {
				var value1 = source[item.name];
				if (typeof(value1) === 'number') {
					booleanValue.set_value(Serenity.IdExtensions.isPositiveId(value1));
				}
				else {
					booleanValue.set_value(!!value1);
				}
			}
			else {
				var doubleValue = ss.safeCast(editor, $Serenity_IDoubleValue);
				if (ss.isValue(doubleValue)) {
					var d = source[item.name];
					if (!!(ss.isNullOrUndefined(d) || ss.isInstanceOfType(d, String) && Q.isTrimmedEmpty(ss.cast(d, String)))) {
						doubleValue.set_value(null);
					}
					else if (ss.isInstanceOfType(d, String)) {
						doubleValue.set_value(ss.cast(Q.parseDecimal(ss.cast(d, String)), Number));
					}
					else if (ss.isInstanceOfType(d, Boolean)) {
						doubleValue.set_value((!!d ? 1 : 0));
					}
					else {
						doubleValue.set_value(ss.cast(d, Number));
					}
				}
				else if (editor.get_element().is(':input')) {
					var v = source[item.name];
					if (!!!ss.isValue(v)) {
						editor.get_element().val('');
					}
					else {
						editor.get_element().val(v);
					}
				}
			}
		}
	};
	$Serenity_PropertyGrid.saveEditorValue = function(editor, item, target) {
		var getEditValue = ss.safeCast(editor, $Serenity_IGetEditValue);
		if (ss.isValue(getEditValue)) {
			getEditValue.getEditValue(item, target);
		}
		else {
			var stringValue = ss.safeCast(editor, $Serenity_IStringValue);
			if (ss.isValue(stringValue)) {
				target[item.name] = stringValue.get_value();
			}
			else {
				var booleanValue = ss.safeCast(editor, $Serenity_IBooleanValue);
				if (ss.isValue(booleanValue)) {
					target[item.name] = booleanValue.get_value();
				}
				else {
					var doubleValue = ss.safeCast(editor, $Serenity_IDoubleValue);
					if (ss.isValue(doubleValue)) {
						var value = doubleValue.get_value();
						target[item.name] = (isNaN(value) ? null : value);
					}
					else if (editor.get_element().is(':input')) {
						target[item.name] = editor.get_element().val();
					}
				}
			}
		}
	};
	$Serenity_PropertyGrid.$setMaxLength = function(widget, maxLength) {
		if (widget.get_element().is(':input')) {
			if (maxLength > 0) {
				widget.get_element().attr('maxlength', maxLength.toString());
			}
			else {
				widget.get_element().removeAttr('maxlength');
			}
		}
	};
	$Serenity_PropertyGrid.setRequired = function(widget, isRequired) {
		var req = ss.safeCast(widget, $Serenity_IValidateRequired);
		if (ss.isValue(req)) {
			req.set_required(isRequired);
		}
		else if (widget.get_element().is(':input')) {
			widget.get_element().toggleClass('required', !!isRequired);
		}
		var gridField = $Serenity_WX.getGridField(widget);
		var hasSupItem = Enumerable.from(gridField.find('sup').get()).any();
		if (isRequired && !hasSupItem) {
			$('<sup>*</sup>').attr('title', 'Bu alan zorunludur').prependTo(gridField.find('.caption')[0]);
		}
		else if (!isRequired && hasSupItem) {
			$(gridField.find('sup')[0]).remove();
		}
	};
	$Serenity_PropertyGrid.setReadOnly = function(widget, isReadOnly) {
		var readOnly = ss.safeCast(widget, $Serenity_IReadOnly);
		if (ss.isValue(readOnly)) {
			readOnly.set_readOnly(isReadOnly);
		}
		else if (widget.get_element().is(':input')) {
			$Serenity_PropertyGrid.setReadOnly$1(widget.get_element(), isReadOnly);
		}
	};
	$Serenity_PropertyGrid.setReadOnly$1 = function(elements, isReadOnly) {
		elements.each(function(index, el) {
			var elx = $(el);
			var type = elx.attr('type');
			if (elx.is('select') || type === 'radio' || type === 'checkbox') {
				if (isReadOnly) {
					elx.addClass('readonly').attr('disabled', 'disabled');
				}
				else {
					elx.removeClass('readonly').removeAttr('disabled');
				}
			}
			else if (isReadOnly) {
				elx.addClass('readonly').attr('readonly', 'readonly');
			}
			else {
				elx.removeClass('readonly').removeAttr('readonly');
			}
			return true;
		});
		return elements;
	};
	global.Serenity.PropertyGrid = $Serenity_PropertyGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PropertyGridMode
	var $Serenity_PropertyGridMode = function() {
	};
	$Serenity_PropertyGridMode.__typeName = 'Serenity.PropertyGridMode';
	global.Serenity.PropertyGridMode = $Serenity_PropertyGridMode;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PropertyGridOptions
	var $Serenity_PropertyGridOptions = function() {
	};
	$Serenity_PropertyGridOptions.__typeName = 'Serenity.PropertyGridOptions';
	$Serenity_PropertyGridOptions.createInstance = function() {
		return $Serenity_PropertyGridOptions.$ctor();
	};
	$Serenity_PropertyGridOptions.$ctor = function() {
		var $this = {};
		$this.idPrefix = null;
		$this.items = null;
		$this.useCategories = false;
		$this.categoryOrder = null;
		$this.defaultCategory = null;
		$this.localTextPrefix = null;
		$this.mode = 0;
		$this.useCategories = true;
		$this.defaultCategory = Texts$Controls$PropertyGrid.DefaultCategory.get();
		return $this;
	};
	global.Serenity.PropertyGridOptions = $Serenity_PropertyGridOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PropertyItemHelper
	var $Serenity_PropertyItemHelper = function() {
	};
	$Serenity_PropertyItemHelper.__typeName = 'Serenity.PropertyItemHelper';
	$Serenity_PropertyItemHelper.getPropertyItemsFor = function(type) {
		if (ss.isNullOrUndefined(type)) {
			throw new ss.Exception('type');
		}
		var list = [];
		var $t1 = ss.getMembers(type, 31, 20);
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var member = $t1[$t2];
			var pi = {};
			if (member.type !== 16 && member.type !== 4) {
				continue;
			}
			var hiddenAttribute = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_HiddenAttribute);
			});
			if (hiddenAttribute.length > 0) {
				continue;
			}
			var displayNameAttribute = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $System_ComponentModel_DisplayNameAttribute);
			});
			if (displayNameAttribute.length > 1) {
				throw new ss.Exception(ss.formatString('{0}.{1} için birden fazla başlık belirlenmiş!', ss.getTypeName(type), pi.name));
			}
			var hintAttribute = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_HintAttribute);
			});
			if (hintAttribute.length > 1) {
				throw new ss.Exception(ss.formatString('{0}.{1} için birden fazla ipucu belirlenmiş!', ss.getTypeName(type), pi.name));
			}
			var placeholderAttribute = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_PlaceholderAttribute);
			});
			if (placeholderAttribute.length > 1) {
				throw new ss.Exception(ss.formatString('{0}.{1} için birden fazla placeholder belirlenmiş!', ss.getTypeName(type), pi.name));
			}
			var memberType = ((member.type === 16) ? ss.cast(member, ss.isValue(member) && member.type === 16).returnType : ss.cast(member, ss.isValue(member) && member.type === 4).returnType);
			if (member.type === 16) {
				var p = ss.cast(member, ss.isValue(member) && member.type === 16);
				if (ss.isNullOrUndefined(p.fname)) {
					continue;
				}
				pi.name = p.fname;
			}
			else if (member.type === 4) {
				var f = ss.cast(member, ss.isValue(member) && member.type === 4);
				pi.name = f.sname;
			}
			else {
				continue;
			}
			var categoryAttribute = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_CategoryAttribute);
			});
			if (categoryAttribute.length === 1) {
				pi.category = ss.cast(categoryAttribute[0], $Serenity_ComponentModel_CategoryAttribute).get_category();
			}
			else if (categoryAttribute.length > 1) {
				throw new ss.Exception(ss.formatString('{0}.{1} için birden fazla kategori belirlenmiş!', ss.getTypeName(type), pi.name));
			}
			else if (list.length > 0) {
				pi.category = list[list.length - 1].category;
			}
			var cssClassAttr = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_CssClassAttribute);
			});
			if (cssClassAttr.length === 1) {
				pi.cssClass = ss.cast(cssClassAttr[0], $Serenity_ComponentModel_CssClassAttribute).get_cssClass();
			}
			else if (cssClassAttr.length > 1) {
				throw new ss.Exception(ss.formatString('{0}.{1} için birden fazla css class belirlenmiş!', ss.getTypeName(type), pi.name));
			}
			if ((member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_OneWayAttribute);
			}).length > 0) {
				pi.oneWay = true;
			}
			if ((member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_ReadOnlyAttribute);
			}).length > 0) {
				pi.readOnly = true;
			}
			if (displayNameAttribute.length > 0) {
				pi.title = ss.cast(displayNameAttribute[0], $System_ComponentModel_DisplayNameAttribute).get_displayName();
			}
			if (hintAttribute.length > 0) {
				pi.hint = ss.cast(hintAttribute[0], $Serenity_ComponentModel_HintAttribute).get_hint();
			}
			if (placeholderAttribute.length > 0) {
				pi.placeholder = ss.cast(placeholderAttribute[0], $Serenity_ComponentModel_PlaceholderAttribute).get_value();
			}
			if (ss.isNullOrUndefined(pi.title)) {
				pi.title = pi.name;
			}
			var defaultValueAttribute = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_DefaultValueAttribute);
			});
			if (defaultValueAttribute.length === 1) {
				pi.defaultValue = ss.cast(defaultValueAttribute[0], $Serenity_ComponentModel_DefaultValueAttribute).get_value();
			}
			var insertableAttribute = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_InsertableAttribute);
			});
			if (insertableAttribute.length > 0) {
				pi.insertable = insertableAttribute[0].get_value();
			}
			else {
				pi.insertable = true;
			}
			var updatableAttribute = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_UpdatableAttribute);
			});
			if (updatableAttribute.length > 0) {
				pi.updatable = updatableAttribute[0].get_value();
			}
			else {
				pi.updatable = true;
			}
			var typeAttrArray = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_EditorTypeAttribute);
			});
			if (typeAttrArray.length > 1) {
				throw new ss.Exception(ss.formatString('{0}.{1} için birden fazla editör tipi belirlenmiş!', ss.getTypeName(type), pi.name));
			}
			var nullableType = memberType;
			//Nullable.GetUnderlyingType(memberType);
			var enumType = null;
			if (ss.isEnum(memberType)) {
				enumType = memberType;
			}
			else if (ss.isValue(nullableType) && ss.isEnum(nullableType)) {
				enumType = nullableType;
			}
			if (typeAttrArray.length === 0) {
				if (ss.isValue(enumType)) {
					pi.editorType = 'Select';
				}
				else if (ss.referenceEquals(memberType, ss.JsDate)) {
					pi.editorType = 'Date';
				}
				else if (ss.referenceEquals(memberType, Boolean)) {
					pi.editorType = 'Boolean';
				}
				else if (ss.referenceEquals(memberType, Number) || ss.referenceEquals(memberType, Number)) {
					pi.editorType = 'Decimal';
				}
				else if (ss.referenceEquals(memberType, ss.Int32)) {
					pi.editorType = 'Integer';
				}
				else {
					pi.editorType = 'String';
				}
			}
			else {
				var et = ss.cast(typeAttrArray[0], $Serenity_ComponentModel_EditorTypeAttribute);
				pi.editorType = et.editorType;
				et.setParams(pi.editorParams);
			}
			var reqAttr = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_RequiredAttribute);
			});
			if (reqAttr.length > 0) {
				pi.required = reqAttr[0].get_isRequired();
			}
			var maxLengthAttr = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_MaxLengthAttribute);
			});
			if (maxLengthAttr.length > 0) {
				pi.maxLength = maxLengthAttr.get_maxLength();
				pi.editorParams['maxLength'] = pi.maxLength;
			}
			var $t3 = (member.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $Serenity_ComponentModel_EditorOptionAttribute);
			});
			for (var $t4 = 0; $t4 < $t3.length; $t4++) {
				var param = $t3[$t4];
				var key = param.get_key();
				if (ss.isValue(key) && key.length >= 1) {
					key = key.substr(0, 1).toLowerCase() + key.substring(1);
				}
				pi.editorParams[key] = param.get_value();
			}
			list.push(pi);
		}
		return list;
	};
	global.Serenity.PropertyItemHelper = $Serenity_PropertyItemHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PropertyItemSlickConverter
	var $Serenity_PropertyItemSlickConverter = function() {
	};
	$Serenity_PropertyItemSlickConverter.__typeName = 'Serenity.PropertyItemSlickConverter';
	$Serenity_PropertyItemSlickConverter.toSlickColumns = function(items) {
		var result = [];
		if (ss.isNullOrUndefined(items)) {
			return result;
		}
		for (var i = 0; i < items.length; i++) {
			result.push($Serenity_PropertyItemSlickConverter.toSlickColumn(items[i]));
		}
		return result;
	};
	$Serenity_PropertyItemSlickConverter.toSlickColumn = function(item) {
		var result = {};
		result.sourceItem = item;
		result.field = item.name;
		var $t1 = Q.tryGetText(item.title);
		if (ss.isNullOrUndefined($t1)) {
			$t1 = item.title;
		}
		result.name = $t1;
		result.cssClass = item.cssClass;
		result.sortOrder = item.sortOrder;
		if (ss.isValue(item.alignment) && item.alignment.length > 0) {
			if (!Q.isEmptyOrNull(result.cssClass)) {
				result.cssClass += ' align-' + item.alignment;
			}
			else {
				result.cssClass = 'align-' + item.alignment;
			}
		}
		result.width = (ss.isValue(item.width) ? item.width : 80);
		result.minWidth = ((!ss.isValue(item.minWidth) || item.minWidth === 0) ? 30 : item.minWidth);
		result.maxWidth = ((!ss.isValue(item.maxWidth) || item.maxWidth === 0) ? null : item.maxWidth);
		result.resizable = !ss.isValue(item.resizable) || item.resizable;
		if (ss.isValue(item.formatterType) && item.formatterType.length > 0) {
			var formatter = ss.cast(ss.createInstance($Serenity_FormatterTypeRegistry.get(item.formatterType)), Serenity.ISlickFormatter);
			if (ss.isValue(item.formatterParams)) {
				$Serenity_ReflectionOptionsSetter.set(formatter, item.formatterParams);
			}
			var initializer = ss.safeCast(formatter, Serenity.IInitializeColumn);
			if (ss.isValue(initializer)) {
				initializer.initializeColumn(result);
			}
			result.format = ss.mkdel(formatter, formatter.format);
		}
		return result;
	};
	global.Serenity.PropertyItemSlickConverter = $Serenity_PropertyItemSlickConverter;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.PublicEditorTypes
	var $Serenity_PublicEditorTypes = function() {
	};
	$Serenity_PublicEditorTypes.__typeName = 'Serenity.PublicEditorTypes';
	$Serenity_PublicEditorTypes.$registerType = function(type) {
		var name = ss.getTypeFullName(type);
		var info = { type: type };
		var displayAttr = ss.getAttributes(type, $System_ComponentModel_DisplayNameAttribute, true);
		if (ss.isValue(displayAttr) && displayAttr.length > 0) {
			info.displayName = ss.cast(displayAttr[0], $System_ComponentModel_DisplayNameAttribute).get_displayName();
		}
		else {
			info.displayName = ss.getTypeFullName(type);
		}
		var optionsAttr = ss.getAttributes(type, Serenity.OptionsTypeAttribute, true);
		if (ss.isValue(optionsAttr) && optionsAttr.length > 0) {
			info.optionsType = ss.cast(optionsAttr[0], Serenity.OptionsTypeAttribute).get_optionsType();
		}
		$Serenity_PublicEditorTypes.$registeredTypes[name] = info;
	};
	$Serenity_PublicEditorTypes.get_registeredTypes = function() {
		if (ss.isNullOrUndefined($Serenity_PublicEditorTypes.$registeredTypes)) {
			$Serenity_PublicEditorTypes.$registeredTypes = {};
			$Serenity_EditorTypeRegistry.$initialize();
			var $t1 = new ss.ObjectEnumerator($Serenity_EditorTypeRegistry.$knownTypes);
			try {
				while ($t1.moveNext()) {
					var pair = $t1.current();
					if (ss.keyExists($Serenity_PublicEditorTypes.$registeredTypes, ss.getTypeFullName(pair.value))) {
						continue;
					}
					$Serenity_PublicEditorTypes.$registerType(pair.value);
				}
			}
			finally {
				$t1.dispose();
			}
		}
		return $Serenity_PublicEditorTypes.$registeredTypes;
	};
	global.Serenity.PublicEditorTypes = $Serenity_PublicEditorTypes;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.QuickSearchInput
	var $Serenity_QuickSearchInput = function(input, opt) {
		this.$lastValue = null;
		this.$timer = 0;
		this.$field = null;
		this.$fieldChanged = false;
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_QuickSearchInputOptions]).call(this, input, opt);
		input.attr('title', Texts$Controls$QuickSearch.Hint.get()).attr('placeholder', Texts$Controls$QuickSearch.Placeholder.get());
		this.$lastValue = Q.trim(ss.coalesce(input.val(), ''));
		var self = this;
		this.element.bind('keyup.' + this.uniqueName, function() {
			self.checkIfValueChanged();
		});
		this.element.bind('change.' + this.uniqueName, function() {
			self.checkIfValueChanged();
		});
		$('<span><i></i></span>').addClass('quick-search-icon').insertBefore(input);
		if (ss.isValue(this.options.fields) && this.options.fields.length > 0) {
			var a = $('<a/>').addClass('quick-search-field').attr('title', Texts$Controls$QuickSearch.FieldSelection.get()).insertBefore(input);
			var menu = $('<ul></ul>').css('width', '120px');
			for (var $t1 = 0; $t1 < this.options.fields.length; $t1++) {
				var item = this.options.fields[$t1];
				var field = { $: item };
				$('<li><a/></li>').appendTo(menu).children().attr('href', '#').text(ss.coalesce(item.title, '')).click(ss.mkdel({ field: field, $this: this }, function(e) {
					e.preventDefault();
					this.$this.$fieldChanged = !ss.referenceEquals(self.$field, this.field.$);
					self.$field = this.field.$;
					this.$this.$updateInputPlaceHolder();
					this.$this.checkIfValueChanged();
				}));
			}
			new $Serenity_PopupMenuButton(a, { positionMy: 'right top', positionAt: 'right bottom', menu: menu });
			this.$field = this.options.fields[0];
			this.$updateInputPlaceHolder();
		}
		this.element.bind('execute-search.' + this.uniqueName, ss.mkdel(this, function(e1) {
			if (!!this.$timer) {
				window.clearTimeout(this.$timer);
			}
			this.$searchNow(Q.trim(ss.coalesce(this.element.val(), '')));
		}));
	};
	$Serenity_QuickSearchInput.__typeName = 'Serenity.QuickSearchInput';
	global.Serenity.QuickSearchInput = $Serenity_QuickSearchInput;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.QuickSearchInputOptions
	var $Serenity_QuickSearchInputOptions = function() {
	};
	$Serenity_QuickSearchInputOptions.__typeName = 'Serenity.QuickSearchInputOptions';
	$Serenity_QuickSearchInputOptions.createInstance = function() {
		return $Serenity_QuickSearchInputOptions.$ctor();
	};
	$Serenity_QuickSearchInputOptions.$ctor = function() {
		var $this = {};
		$this.typeDelay = 0;
		$this.loadingParentClass = null;
		$this.filteredParentClass = null;
		$this.onSearch = null;
		$this.fields = null;
		$this.typeDelay = 500;
		$this.loadingParentClass = 's-QuickSearchLoading';
		$this.filteredParentClass = 's-QuickSearchFiltered';
		return $this;
	};
	global.Serenity.QuickSearchInputOptions = $Serenity_QuickSearchInputOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ReflectionOptionsSetter
	var $Serenity_ReflectionOptionsSetter = function() {
	};
	$Serenity_ReflectionOptionsSetter.__typeName = 'Serenity.ReflectionOptionsSetter';
	$Serenity_ReflectionOptionsSetter.set = function(target, options) {
		if (ss.isNullOrUndefined(options)) {
			return;
		}
		var props = ss.getMembers(ss.getInstanceType(target), 16, 20);
		var propByName = Enumerable.from(props).where(function(x) {
			return !!x.setter && ((x.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, Serenity.ComponentModel.OptionAttribute);
			}).length > 0 || (x.attr || []).filter(function(a) {
				return ss.isInstanceOfType(a, $System_ComponentModel_DisplayNameAttribute);
			}).length > 0);
		}).toDictionary(function(x1) {
			return $Serenity_ReflectionUtils.makeCamelCase(x1.name);
		}, null, String, Object);
		var $t1 = ss.getEnumerator(Object.keys(options));
		try {
			while ($t1.moveNext()) {
				var k = $t1.current();
				var p = {};
				if (propByName.tryGetValue($Serenity_ReflectionUtils.makeCamelCase(k), p)) {
					ss.midel(p.$.setter, target)(options[k]);
				}
			}
		}
		finally {
			$t1.dispose();
		}
	};
	global.Serenity.ReflectionOptionsSetter = $Serenity_ReflectionOptionsSetter;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ReflectionUtils
	var $Serenity_ReflectionUtils = function() {
	};
	$Serenity_ReflectionUtils.__typeName = 'Serenity.ReflectionUtils';
	$Serenity_ReflectionUtils.getPropertyValue = function(o, property) {
		var d = o;
		var getter = d['get_' + property];
		if (!!!(typeof(getter) === 'undefined')) {
			return getter.apply(o);
		}
		var camelCase = $Serenity_ReflectionUtils.makeCamelCase(property);
		getter = d['get_' + camelCase];
		if (!!!(typeof(getter) === 'undefined')) {
			return getter.apply(o);
		}
		return d[camelCase];
	};
	$Serenity_ReflectionUtils.setPropertyValue = function(o, property, value) {
		var d = o;
		var setter = d['set_' + property];
		if (!!!(typeof(setter) === 'undefined')) {
			setter.apply(o, [value]);
			return;
		}
		var camelCase = $Serenity_ReflectionUtils.makeCamelCase(property);
		setter = d['set_' + camelCase];
		if (!!!(typeof(setter) === 'undefined')) {
			setter.apply(o, [value]);
			return;
		}
		d[camelCase] = value;
	};
	$Serenity_ReflectionUtils.makeCamelCase = function(s) {
		if (ss.isNullOrEmptyString(s)) {
			return s;
		}
		if (s === 'ID') {
			return 'id';
		}
		var hasNonUppercase = false;
		var numUppercaseChars = 0;
		for (var index = 0; index < s.length; index++) {
			if (s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90) {
				numUppercaseChars++;
			}
			else {
				hasNonUppercase = true;
				break;
			}
		}
		if (!hasNonUppercase && s.length !== 1 || numUppercaseChars === 0) {
			return s;
		}
		else if (numUppercaseChars > 1) {
			return s.substr(0, numUppercaseChars - 1).toLowerCase() + s.substr(numUppercaseChars - 1);
		}
		else if (s.length === 1) {
			return s.toLowerCase();
		}
		else {
			return s.substr(0, 1).toLowerCase() + s.substr(1);
		}
	};
	global.Serenity.ReflectionUtils = $Serenity_ReflectionUtils;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Select2AjaxEditor
	var $Serenity_Select2AjaxEditor$2 = function(TOptions, TItem) {
		var $type = function(hidden, opt) {
			this.pageSize = 50;
			ss.makeGenericType($Serenity_Widget$1, [TOptions]).call(this, hidden, opt);
			var emptyItemText = this.emptyItemText();
			if (ss.isValue(emptyItemText)) {
				hidden.attr('placeholder', emptyItemText);
			}
			hidden.select2(this.getSelect2Options());
			hidden.attr('type', 'text');
			// jquery validate to work
			hidden.bind('change.' + this.uniqueName, function(e, x) {
				if (!!($Serenity_WX.hasOriginalEvent(e) || !x)) {
					if (ss.isValue($Serenity_ValidationHelper.getValidator(hidden))) {
						hidden.valid();
					}
				}
			});
		};
		ss.registerGenericClassInstance($type, $Serenity_Select2AjaxEditor$2, [TOptions, TItem], {
			emptyItemText: function() {
				return ss.coalesce(this.element.attr('placeholder'), '--seçiniz--');
			},
			getService: function() {
				throw new ss.NotImplementedException();
			},
			query: function(request, callback) {
				var options = {
					blockUI: false,
					service: this.getService() + '/List',
					request: request,
					onSuccess: function(response) {
						callback(response);
					}
				};
				this.executeQuery(options);
			},
			executeQuery: function(options) {
				Q.serviceCall(options);
			},
			queryByKey: function(key, callback) {
				var options = {
					blockUI: false,
					service: this.getService() + '/Retrieve',
					request: { EntityId: key },
					onSuccess: function(response) {
						callback(response.Entity);
					}
				};
				this.executeQueryByKey(options);
			},
			executeQueryByKey: function(options) {
				Q.serviceCall(options);
			},
			getItemKey: null,
			getItemText: null,
			getTypeDelay: function() {
				return 500;
			},
			getSelect2Options: function() {
				var emptyItemText = this.emptyItemText();
				var queryTimeout = 0;
				return { minimumResultsForSearch: 10, placeHolder: (!Q.isEmptyOrNull(emptyItemText) ? emptyItemText : null), allowClear: ss.isValue(emptyItemText), query: ss.mkdel(this, function(query) {
					var request = { ContainsText: Q.trimToNull(query.term), Skip: (query.page - 1) * this.pageSize, Take: this.pageSize + 1 };
					if (queryTimeout !== 0) {
						window.clearTimeout(queryTimeout);
					}
					queryTimeout = window.setTimeout(ss.mkdel(this, function() {
						this.query(request, ss.mkdel(this, function(response) {
							query.callback({ results: Enumerable.from(response.Entities).take(this.pageSize).select(ss.mkdel(this, function(x) {
								return { id: this.getItemKey(x), text: this.getItemText(x), source: x };
							})).toArray(), more: response.Entities.length >= this.pageSize });
						}));
					}), this.getTypeDelay());
				}), initSelection: ss.mkdel(this, function(element, callback) {
					var val = element.val();
					if (Q.isEmptyOrNull(val)) {
						callback(null);
						return;
					}
					this.queryByKey(val, ss.mkdel(this, function(result) {
						callback((ss.isNullOrUndefined(result) ? null : { id: this.getItemKey(result), text: this.getItemText(result), source: result }));
					}));
				}) };
			},
			addInplaceCreate: function(title) {
				var self = this;
				$('<a><b/></a>').addClass('inplace-button inplace-create').attr('title', title).insertAfter(this.element).click(function(e) {
					self.inplaceCreateClick(e);
				});
				this.get_select2Container().add(this.element).addClass('has-inplace-button');
			},
			inplaceCreateClick: function(e) {
			},
			get_select2Container: function() {
				return this.element.prevAll('.select2-container');
			},
			get_value: function() {
				return ss.safeCast(this.element.select2('val'), String);
			},
			set_value: function(value) {
				if (!ss.referenceEquals(value, this.get_value())) {
					this.element.select2('val', value).triggerHandler('change', [true]);
				}
			}
		}, function() {
			return ss.makeGenericType($Serenity_Widget$1, [TOptions]);
		}, function() {
			return [$Serenity_IStringValue];
		});
		ss.setMetadata($type, { attr: [new Serenity.ElementAttribute('<input type="hidden"/>')] });
		return $type;
	};
	$Serenity_Select2AjaxEditor$2.__typeName = 'Serenity.Select2AjaxEditor$2';
	ss.initGenericClass($Serenity_Select2AjaxEditor$2, $asm, 2);
	global.Serenity.Select2AjaxEditor$2 = $Serenity_Select2AjaxEditor$2;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Select2Editor
	var $Serenity_Select2Editor$2 = function(TOptions, TItem) {
		var $type = function(hidden, opt) {
			this.items = null;
			this.pageSize = 100;
			ss.makeGenericType($Serenity_Widget$1, [TOptions]).call(this, hidden, opt);
			this.items = [];
			var emptyItemText = this.emptyItemText();
			if (ss.isValue(emptyItemText)) {
				hidden.attr('placeholder', emptyItemText);
			}
			hidden.select2(this.getSelect2Options());
			hidden.attr('type', 'text');
			// jquery validate to work
			hidden.bind('change.' + this.uniqueName, function(e, x) {
				if (!!($Serenity_WX.hasOriginalEvent(e) || !x)) {
					if (ss.isValue($Serenity_ValidationHelper.getValidator(hidden))) {
						hidden.valid();
					}
				}
			});
		};
		ss.registerGenericClassInstance($type, $Serenity_Select2Editor$2, [TOptions, TItem], {
			emptyItemText: function() {
				return ss.coalesce(this.element.attr('placeholder'), '--seçiniz--');
			},
			getSelect2Options: function() {
				var emptyItemText = this.emptyItemText();
				return { data: this.items, placeHolder: (!Q.isEmptyOrNull(emptyItemText) ? emptyItemText : null), allowClear: ss.isValue(emptyItemText), query: ss.mkdel(this, function(query) {
					var term = (Q.isEmptyOrNull(query.term) ? '' : Select2.util.stripDiacritics(ss.coalesce(query.term, '')).toUpperCase());
					var results = this.items.filter(function(item) {
						return ss.isNullOrUndefined(term) || ss.startsWithString(Select2.util.stripDiacritics(ss.coalesce(item.text, '')).toUpperCase(), term);
					});
					ss.arrayAddRange(results, this.items.filter(function(item1) {
						return ss.isValue(term) && !ss.startsWithString(Select2.util.stripDiacritics(ss.coalesce(item1.text, '')).toUpperCase(), term) && Select2.util.stripDiacritics(ss.coalesce(item1.text, '')).toUpperCase().indexOf(term) >= 0;
					}));
					query.callback({ results: results.slice((query.page - 1) * this.pageSize, query.page * this.pageSize), more: results.length >= query.page * this.pageSize });
				}), initSelection: ss.mkdel(this, function(element, callback) {
					var val = element.val();
					var item2 = null;
					for (var i = 0; i < this.items.length; i++) {
						var x = this.items[i];
						if (ss.referenceEquals(x.id, val)) {
							item2 = x;
							break;
						}
					}
					callback(item2);
				}) };
			},
			clearItems: function() {
				ss.clear(this.items);
			},
			addItem: function(key, text, source, disabled) {
				this.items.push({ id: key, text: text, source: source, disabled: disabled });
			},
			addInplaceCreate: function(title) {
				var self = this;
				$('<a><b/></a>').addClass('inplace-button inplace-create').attr('title', title).insertAfter(this.element).click(function(e) {
					self.inplaceCreateClick(e);
				});
				this.get_select2Container().add(this.element).addClass('has-inplace-button');
			},
			inplaceCreateClick: function(e) {
			},
			get_select2Container: function() {
				return this.element.prevAll('.select2-container');
			},
			get_items: function() {
				return this.items;
			},
			get_value: function() {
				return ss.safeCast(this.element.select2('val'), String);
			},
			set_value: function(value) {
				if (!ss.referenceEquals(value, this.get_value())) {
					this.element.select2('val', value).triggerHandler('change', [true]);
				}
			},
			get_text: function() {
				var $t1 = this.element.select2('data');
				if (ss.isNullOrUndefined($t1)) {
					$t1 = new Object();
				}
				return ss.cast($t1.text, String);
			}
		}, function() {
			return ss.makeGenericType($Serenity_Widget$1, [TOptions]);
		}, function() {
			return [$Serenity_IStringValue];
		});
		ss.setMetadata($type, { attr: [new Serenity.ElementAttribute('<input type="hidden"/>')] });
		return $type;
	};
	$Serenity_Select2Editor$2.__typeName = 'Serenity.Select2Editor$2';
	ss.initGenericClass($Serenity_Select2Editor$2, $asm, 2);
	global.Serenity.Select2Editor$2 = $Serenity_Select2Editor$2;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.SelectEditor
	var $Serenity_SelectEditor = function(hidden, opt) {
		ss.makeGenericType($Serenity_Select2Editor$2, [$Serenity_SelectEditorOptions, Object]).call(this, hidden, opt);
		this.updateItems();
	};
	$Serenity_SelectEditor.__typeName = 'Serenity.SelectEditor';
	global.Serenity.SelectEditor = $Serenity_SelectEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.SelectEditorOptions
	var $Serenity_SelectEditorOptions = function() {
	};
	$Serenity_SelectEditorOptions.__typeName = 'Serenity.SelectEditorOptions';
	$Serenity_SelectEditorOptions.createInstance = function() {
		return $Serenity_SelectEditorOptions.$ctor();
	};
	$Serenity_SelectEditorOptions.$ctor = function() {
		var $this = {};
		$this.items = null;
		$this.emptyOptionText = null;
		$this.items = [];
		return $this;
	};
	global.Serenity.SelectEditorOptions = $Serenity_SelectEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.StringEditor
	var $Serenity_StringEditor = function(input) {
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, input, new Object());
	};
	$Serenity_StringEditor.__typeName = 'Serenity.StringEditor';
	global.Serenity.StringEditor = $Serenity_StringEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.StringFiltering
	var $Serenity_StringFiltering = function() {
		$Serenity_BaseFiltering.call(this);
	};
	$Serenity_StringFiltering.__typeName = 'Serenity.StringFiltering';
	global.Serenity.StringFiltering = $Serenity_StringFiltering;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.StringInflector
	var $Serenity_StringInflector = function() {
	};
	$Serenity_StringInflector.__typeName = 'Serenity.StringInflector';
	$Serenity_StringInflector.$initialize = function() {
		if ($Serenity_StringInflector.$initialized) {
			return;
		}
		var plural = [];
		plural.push([new RegExp('move', 'i'), 'moves']);
		plural.push([new RegExp('sex', 'i'), 'sexes']);
		plural.push([new RegExp('child', 'i'), 'children']);
		plural.push([new RegExp('man', 'i'), 'men']);
		plural.push([new RegExp('foot', 'i'), 'feet']);
		plural.push([new RegExp('person', 'i'), 'people']);
		plural.push([new RegExp('taxon', 'i'), 'taxa']);
		plural.push([new RegExp('(quiz)', 'i'), '$1zes']);
		plural.push([new RegExp('^(ox)$', 'i'), '$1en']);
		plural.push([new RegExp('(m|l)ouse$', 'i'), '$1ice']);
		plural.push([new RegExp('(matr|vert|ind|suff)ix|ex$', 'i'), '$1ices']);
		plural.push([new RegExp('(x|ch|ss|sh)$', 'i'), '$1es']);
		plural.push([new RegExp('([^aeiouy]|qu)y$', 'i'), '$1ies']);
		plural.push([new RegExp('(?:([^f])fe|([lr])f)$', 'i'), '$1$2ves']);
		plural.push([new RegExp('sis$', 'i'), 'ses']);
		plural.push([new RegExp('([ti]|addend)um$', 'i'), '$1a']);
		plural.push([new RegExp('(alumn|formul)a$', 'i'), '$1ae']);
		plural.push([new RegExp('(buffal|tomat|her)o$', 'i'), '$1oes']);
		plural.push([new RegExp('(bu)s$', 'i'), '$1ses']);
		plural.push([new RegExp('(alias|status)$', 'i'), '$1es']);
		plural.push([new RegExp('(octop|vir)us$', 'i'), '$1i']);
		plural.push([new RegExp('(gen)us$', 'i'), '$1era']);
		plural.push([new RegExp('(ax|test)is$', 'i'), '$1es']);
		plural.push([new RegExp('s$', 'i'), 's']);
		plural.push([new RegExp('$', 'i'), 's']);
		var singular = [];
		singular.push([new RegExp('cookies$', 'i'), 'cookie']);
		singular.push([new RegExp('moves$', 'i'), 'move']);
		singular.push([new RegExp('sexes$', 'i'), 'sex']);
		singular.push([new RegExp('children$', 'i'), 'child']);
		singular.push([new RegExp('men$', 'i'), 'man']);
		singular.push([new RegExp('feet$', 'i'), 'foot']);
		singular.push([new RegExp('people$', 'i'), 'person']);
		singular.push([new RegExp('taxa$', 'i'), 'taxon']);
		singular.push([new RegExp('databases$', 'i'), 'database']);
		singular.push([new RegExp('(quiz)zes$', 'i'), '$1']);
		singular.push([new RegExp('(matr|suff)ices$', 'i'), '$1ix']);
		singular.push([new RegExp('(vert|ind)ices$', 'i'), '$1ex']);
		singular.push([new RegExp('^(ox)en', 'i'), '$1']);
		singular.push([new RegExp('(alias|status)es$', 'i'), '$1']);
		singular.push([new RegExp('(tomato|hero|buffalo)es$', 'i'), '$1']);
		singular.push([new RegExp('([octop|vir])i$', 'i'), '$1us']);
		singular.push([new RegExp('(gen)era$', 'i'), '$1us']);
		singular.push([new RegExp('(cris|ax|test)es$', 'i'), '$1is']);
		singular.push([new RegExp('(shoe)s$', 'i'), '$1']);
		singular.push([new RegExp('(o)es$', 'i'), '$1']);
		singular.push([new RegExp('(bus)es$', 'i'), '$1']);
		singular.push([new RegExp('([m|l])ice$', 'i'), '$1ouse']);
		singular.push([new RegExp('(x|ch|ss|sh)es$', 'i'), '$1']);
		singular.push([new RegExp('(m)ovies$', 'i'), '$1ovie']);
		singular.push([new RegExp('(s)eries$', 'i'), '$1eries']);
		singular.push([new RegExp('([^aeiouy]|qu)ies$', 'i'), '$1y']);
		singular.push([new RegExp('([lr])ves$', 'i'), '$1f']);
		singular.push([new RegExp('(tive)s$', 'i'), '$1']);
		singular.push([new RegExp('(hive)s$', 'i'), '$1']);
		singular.push([new RegExp('([^f])ves$', 'i'), '$1fe']);
		singular.push([new RegExp('(^analy)ses$', 'i'), '$1sis']);
		singular.push([new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$', 'i'), '$1\\2sis']);
		singular.push([new RegExp('([ti]|addend)a$', 'i'), '$1um']);
		singular.push([new RegExp('(alumn|formul)ae$', 'i'), '$1a']);
		singular.push([new RegExp('(n)ews$', 'i'), '$1ews']);
		singular.push([new RegExp('(.*)s$', 'i'), '$1']);
		var countable = [];
		countable.push('aircraft');
		countable.push('cannon');
		countable.push('deer');
		countable.push('equipment');
		countable.push('fish');
		countable.push('information');
		countable.push('money');
		countable.push('moose');
		countable.push('rice');
		countable.push('series');
		countable.push('sheep');
		countable.push('species');
		countable.push('swin');
		$Serenity_StringInflector.$plural = plural;
		$Serenity_StringInflector.$singular = singular;
		$Serenity_StringInflector.$countable = countable;
		$Serenity_StringInflector.$initialized = true;
	};
	$Serenity_StringInflector.pluralize = function(word) {
		$Serenity_StringInflector.$initialize();
		if (ss.isValue($Serenity_StringInflector.$pluralizeCache) && ss.keyExists($Serenity_StringInflector.$pluralizeCache, word)) {
			return $Serenity_StringInflector.$pluralizeCache[word];
		}
		var result = word;
		for (var $t1 = 0; $t1 < $Serenity_StringInflector.$plural.length; $t1++) {
			var p = $Serenity_StringInflector.$plural[$t1];
			var r = ss.cast(p[0], RegExp);
			if (r.test(word)) {
				result = word.replace(r, ss.cast(p[1], String));
				break;
			}
		}
		for (var $t2 = 0; $t2 < $Serenity_StringInflector.$countable.length; $t2++) {
			var c = $Serenity_StringInflector.$countable[$t2];
			if (ss.referenceEquals(word, c)) {
				result = c;
				break;
			}
		}
		$Serenity_StringInflector.$pluralizeCache = $Serenity_StringInflector.$pluralizeCache || {};
		$Serenity_StringInflector.$pluralizeCache[word] = result;
		return result;
	};
	$Serenity_StringInflector.singularize = function(word) {
		$Serenity_StringInflector.$initialize();
		if (ss.isValue($Serenity_StringInflector.$singularizeCache) && ss.keyExists($Serenity_StringInflector.$singularizeCache, word)) {
			return $Serenity_StringInflector.$singularizeCache[word];
		}
		var result = word;
		for (var $t1 = 0; $t1 < $Serenity_StringInflector.$singular.length; $t1++) {
			var p = $Serenity_StringInflector.$singular[$t1];
			var r = ss.cast(p[0], RegExp);
			if (r.test(word)) {
				result = word.replace(r, ss.cast(p[1], String));
				break;
			}
		}
		for (var $t2 = 0; $t2 < $Serenity_StringInflector.$countable.length; $t2++) {
			var c = $Serenity_StringInflector.$countable[$t2];
			if (ss.referenceEquals(word, c)) {
				result = c;
				break;
			}
		}
		$Serenity_StringInflector.$singularizeCache = $Serenity_StringInflector.$singularizeCache || {};
		$Serenity_StringInflector.$singularizeCache[word] = result;
		return result;
	};
	$Serenity_StringInflector.isSingular = function(word) {
		$Serenity_StringInflector.$initialize();
		return ss.referenceEquals($Serenity_StringInflector.singularize($Serenity_StringInflector.pluralize(word)).toLowerCase(), word.toLowerCase());
	};
	$Serenity_StringInflector.isPlural = function(word) {
		$Serenity_StringInflector.$initialize();
		return ss.referenceEquals($Serenity_StringInflector.pluralize($Serenity_StringInflector.singularize(word)).toLowerCase(), word.toLowerCase());
	};
	global.Serenity.StringInflector = $Serenity_StringInflector;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.SubDialogHelper
	var $Serenity_SubDialogHelper = function() {
	};
	$Serenity_SubDialogHelper.__typeName = 'Serenity.SubDialogHelper';
	$Serenity_SubDialogHelper.bindToDataChange = function(dialog, owner, dataChange, useTimeout) {
		var widgetName = owner.get_widgetName();
		dialog.get_element().bind('ondatachange.' + widgetName, function(e, dci) {
			if (useTimeout) {
				window.setTimeout(function() {
					dataChange(e, dci);
				}, 0);
			}
			else {
				dataChange(e, dci);
			}
		}).bind('remove.' + widgetName, function() {
			dialog.get_element().unbind('ondatachange.' + widgetName);
		});
		return dialog;
	};
	$Serenity_SubDialogHelper.triggerDataChange = function(dialog) {
		dialog.get_element().triggerHandler('ondatachange');
		return dialog;
	};
	$Serenity_SubDialogHelper.triggerDataChange$1 = function(element) {
		element.triggerHandler('ondatachange');
		return element;
	};
	$Serenity_SubDialogHelper.bubbleDataChange = function(dialog, owner, useTimeout) {
		return $Serenity_SubDialogHelper.bindToDataChange(dialog, owner, function(e, dci) {
			owner.get_element().triggerHandler('ondatachange');
		}, useTimeout);
	};
	$Serenity_SubDialogHelper.cascade = function(cascadedDialog, ofElement) {
		cascadedDialog.get_element().dialog().dialog('option', 'position', $Serenity_SubDialogHelper.cascadedDialogOffset(ofElement));
		return cascadedDialog;
	};
	$Serenity_SubDialogHelper.cascadedDialogOffset = function(element) {
		return { my: 'left top', at: 'left+20 top+20', of: element[0] };
	};
	global.Serenity.SubDialogHelper = $Serenity_SubDialogHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.TemplatedDialog
	var $Serenity_TemplatedDialog = function() {
		ss.makeGenericType($Serenity_TemplatedDialog$1, [Object]).$ctor1.call(this, null);
	};
	$Serenity_TemplatedDialog.__typeName = 'Serenity.TemplatedDialog';
	global.Serenity.TemplatedDialog = $Serenity_TemplatedDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.TemplatedDialog
	var $Serenity_TemplatedDialog$1 = function(TOptions) {
		var $type = function() {
			$type.$ctor2.call(this, Q.newBodyDiv(), null);
		};
		$type.$ctor2 = function(div, opt) {
			this.isPanel = false;
			this.validator = null;
			this.tabs = null;
			this.toolbar = null;
			ss.makeGenericType($Serenity_TemplatedWidget$1, [TOptions]).call(this, div, opt);
			this.isPanel = ss.getAttributes(ss.getInstanceType(this), Serenity.PanelAttribute, true).length > 0;
			if (!this.isPanel) {
				this.initDialog();
			}
			this.initValidator();
			this.initTabs();
			this.initToolbar();
		};
		$type.$ctor1 = function(opt) {
			$type.$ctor2.call(this, Q.newBodyDiv(), opt);
		};
		$type.$getCssSize = function(element, name, size) {
			size.$ = 0;
			var cssSize = element.css(name);
			if (!ss.isValue(cssSize)) {
				return false;
			}
			if (!ss.endsWithString(cssSize, 'px')) {
				return false;
			}
			cssSize = cssSize.substr(0, cssSize.length - 2);
			if (!ss.Int32.tryParse(cssSize, size) || size.$ === 0) {
				return false;
			}
			return true;
		};
		$type.$applyCssSizes = function(opt, dialogClass) {
			var size = {};
			var dialog = $('<div/>').hide().addClass(dialogClass).appendTo(document.body);
			try {
				var sizeHelper = $('<div/>').addClass('size').appendTo(dialog);
				if ($type.$getCssSize(sizeHelper, 'minWidth', size)) {
					opt.minWidth = size.$;
				}
				if ($type.$getCssSize(sizeHelper, 'width', size)) {
					opt.width = size.$;
				}
				if ($type.$getCssSize(sizeHelper, 'height', size)) {
					opt.height = size.$;
				}
				if ($type.$getCssSize(sizeHelper, 'minHeight', size)) {
					opt.minHeight = size.$;
				}
			}
			finally {
				dialog.remove();
			}
		};
		ss.registerGenericClassInstance($type, $Serenity_TemplatedDialog$1, [TOptions], {
			destroy: function() {
				if (ss.isValue(this.tabs)) {
					this.tabs.tabs('destroy');
				}
				if (ss.isValue(this.toolbar)) {
					this.toolbar.destroy();
					this.toolbar = null;
				}
				if (ss.isValue(this.validator)) {
					this.byId$1('Form').remove();
					this.validator = null;
				}
				if (!this.isPanel) {
					this.element.dialog().dialog('destroy');
				}
				$Serenity_Widget.prototype.destroy.call(this);
			},
			initDialog: function() {
				this.element.dialog(this.getDialogOptions());
				if (ss.getAttributes(ss.getInstanceType(this), Serenity.FlexifyAttribute, true).length > 0) {
					$Serenity_DialogExtensions.dialogFlexify(this.element);
					$Serenity_DialogExtensions.dialogResizable(this.element, null, null, null, null);
				}
				if (ss.getAttributes(ss.getInstanceType(this), Serenity.MaximizableAttribute, true).length > 0) {
					$Serenity_DialogExtensions.dialogMaximizable(this.element);
				}
				var self = this;
				this.element.bind('dialogopen.' + this.uniqueName, function() {
					self.onDialogOpen();
				});
				this.element.bind('dialogclose.' + this.uniqueName, function() {
					self.onDialogClose();
				});
			},
			initToolbar: function() {
				var toolbarDiv = this.byId$1('Toolbar');
				if (toolbarDiv.length === 0) {
					return;
				}
				var opt = { buttons: this.getToolbarButtons() };
				this.toolbar = new $Serenity_Toolbar(toolbarDiv, opt);
			},
			getToolbarButtons: function() {
				return [];
			},
			getValidatorOptions: function() {
				return {};
			},
			initValidator: function() {
				var form = this.byId$1('Form');
				if (form.length > 0) {
					var valOptions = this.getValidatorOptions();
					this.validator = form.validate(Q$Externals.validateOptions(valOptions));
				}
			},
			resetValidation: function() {
				if (ss.isValue(this.validator)) {
					this.validator.resetAll();
				}
			},
			validateForm: function() {
				return ss.isNullOrUndefined(this.validator) || !!this.validator.form();
			},
			dialogOpen: function() {
				this.element.dialog().dialog('open');
			},
			onDialogOpen: function() {
				$(':input:eq(0)', this.element).focus();
				this.arrange();
				if (ss.isValue(this.tabs)) {
					this.tabs.tabs('option', 'active', 0);
				}
			},
			arrange: function() {
				this.element.find('.require-layout').filter(':visible').each(function(i, e) {
					$(e).triggerHandler('layout');
				});
			},
			onDialogClose: function() {
				$(document).trigger('click');
				// for tooltips etc.
				if (ss.isValue($.qtip)) {
					$(document.body).children('.qtip').each(function(index, el) {
						$(el).qtip('hide');
					});
				}
				var self = this;
				window.setTimeout(function() {
					var element = self.element;
					self.destroy();
					element.remove();
				}, 0);
			},
			addCssClass: function() {
				if (ss.getAttributes(ss.getInstanceType(this), Serenity.PanelAttribute, true).length > 0) {
					$Serenity_Widget.prototype.addCssClass.call(this);
				}
				// will add css class to ui-dialog container, not content element
			},
			getDialogOptions: function() {
				var opt = {};
				var dialogClass = 's-Dialog ' + this.getCssClass();
				opt.dialogClass = dialogClass;
				opt.width = 920;
				$type.$applyCssSizes(opt, dialogClass);
				opt.autoOpen = false;
				opt.resizable = ss.getAttributes(ss.getInstanceType(this), Serenity.ResizableAttribute, true).length > 0;
				opt.modal = true;
				opt.position = { my: 'center', at: 'center', of: $(window.window) };
				return opt;
			},
			dialogClose: function() {
				this.element.dialog().dialog('close');
			},
			initTabs: function() {
				var tabsDiv = this.byId$1('Tabs');
				if (tabsDiv.length === 0) {
					return;
				}
				this.tabs = tabsDiv.tabs({});
			},
			get_idPrefix: function() {
				return this.idPrefix;
			}
		}, function() {
			return ss.makeGenericType($Serenity_TemplatedWidget$1, [TOptions]);
		}, function() {
			return [$Serenity_IDialog];
		});
		$type.$ctor2.prototype = $type.$ctor1.prototype = $type.prototype;
		return $type;
	};
	$Serenity_TemplatedDialog$1.__typeName = 'Serenity.TemplatedDialog$1';
	ss.initGenericClass($Serenity_TemplatedDialog$1, $asm, 1);
	global.Serenity.TemplatedDialog$1 = $Serenity_TemplatedDialog$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.TemplatedWidget
	var $Serenity_TemplatedWidget = function(element) {
		ss.makeGenericType($Serenity_TemplatedWidget$1, [Object]).call(this, element, null);
	};
	$Serenity_TemplatedWidget.__typeName = 'Serenity.TemplatedWidget';
	global.Serenity.TemplatedWidget = $Serenity_TemplatedWidget;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.TemplatedWidget
	var $Serenity_TemplatedWidget$1 = function(TOptions) {
		var $type = function(element, opt) {
			this.idPrefix = null;
			ss.makeGenericType($Serenity_Widget$1, [TOptions]).call(this, element, opt);
			this.idPrefix = this.uniqueName + '_';
			var widgetMarkup = this.getTemplate().replace(new RegExp('~_', 'g'), this.idPrefix);
			widgetMarkup = $Serenity_JsRender.render(widgetMarkup, null);
			this.element.html(widgetMarkup);
		};
		ss.registerGenericClassInstance($type, $Serenity_TemplatedWidget$1, [TOptions], {
			byId$1: function(id) {
				return $('#' + this.idPrefix + id);
			},
			byId: function(TWidget) {
				return function(id) {
					return $Serenity_WX.getWidget(TWidget).call(null, this.byId$1(id));
				};
			},
			getTemplateName: function() {
				return ss.getTypeName(ss.getInstanceType(this));
			},
			getTemplate: function() {
				var templateName = this.getTemplateName();
				var template;
				var script = $('script#Template_' + templateName);
				if (script.length > 0) {
					template = script.html();
				}
				else {
					template = Q.getTemplate(templateName);
					if (!ss.isValue(template)) {
						throw new ss.Exception(ss.formatString("Can't locate template for widget '{0}' with name '{1}'!", ss.getTypeName(ss.getInstanceType(this)), templateName));
					}
				}
				return template;
			}
		}, function() {
			return ss.makeGenericType($Serenity_Widget$1, [TOptions]);
		}, function() {
			return [];
		});
		return $type;
	};
	$Serenity_TemplatedWidget$1.__typeName = 'Serenity.TemplatedWidget$1';
	ss.initGenericClass($Serenity_TemplatedWidget$1, $asm, 1);
	global.Serenity.TemplatedWidget$1 = $Serenity_TemplatedWidget$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.TextAreaEditor
	var $Serenity_TextAreaEditor = function(input, opt) {
		ss.makeGenericType($Serenity_Widget$1, [$Serenity_TextAreaEditorOptions]).call(this, input, opt);
		if (this.options.cols !== 0) {
			input.attr('cols', this.options.cols.toString());
		}
		if (this.options.rows !== 0) {
			input.attr('rows', this.options.rows.toString());
		}
	};
	$Serenity_TextAreaEditor.__typeName = 'Serenity.TextAreaEditor';
	global.Serenity.TextAreaEditor = $Serenity_TextAreaEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.TextAreaEditorOptions
	var $Serenity_TextAreaEditorOptions = function() {
	};
	$Serenity_TextAreaEditorOptions.__typeName = 'Serenity.TextAreaEditorOptions';
	$Serenity_TextAreaEditorOptions.createInstance = function() {
		return $Serenity_TextAreaEditorOptions.$ctor();
	};
	$Serenity_TextAreaEditorOptions.$ctor = function() {
		var $this = {};
		$this.cols = 0;
		$this.rows = 0;
		$this.cols = 80;
		$this.rows = 6;
		return $this;
	};
	global.Serenity.TextAreaEditorOptions = $Serenity_TextAreaEditorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.TimeEditor
	var $Serenity_TimeEditor = function(input, opt) {
		this.$minutes = null;
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, input, opt);
		input.addClass('editor s-TimeEditor hour');
		if (!this.options.noEmptyOption) {
			Q.addOption(input, '', '--');
		}
		for (var h = ss.coalesce(this.options.startHour, 0); h <= ss.coalesce(this.options.endHour, 23); h++) {
			Q.addOption(input, h.toString(), ((h < 10) ? ('0' + h) : h.toString()));
		}
		this.$minutes = $('<select/>').addClass('editor s-TimeEditor minute').insertAfter(input);
		for (var m = 0; m <= 59; m += ss.coalesce(this.options.intervalMinutes, 5)) {
			Q.addOption(this.$minutes, m.toString(), ((m < 10) ? ('0' + m) : m.toString()));
		}
	};
	$Serenity_TimeEditor.__typeName = 'Serenity.TimeEditor';
	global.Serenity.TimeEditor = $Serenity_TimeEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Toolbar
	var $Serenity_Toolbar = function(div, options) {
		ss.makeGenericType($Serenity_Widget$1, [Object]).call(this, div, options);
		this.element.addClass('s-Toolbar').html('<div class="tool-buttons"><div class="buttons-outer"><div class="buttons-inner"></div></div></div>');
		var container = $('div.buttons-inner', this.element);
		var buttons = this.options.buttons;
		for (var i = 0; i < buttons.length; i++) {
			this.$createButton(container, buttons[i]);
		}
	};
	$Serenity_Toolbar.__typeName = 'Serenity.Toolbar';
	global.Serenity.Toolbar = $Serenity_Toolbar;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.UploadHelper
	var $Serenity_UploadHelper = function() {
	};
	$Serenity_UploadHelper.__typeName = 'Serenity.UploadHelper';
	$Serenity_UploadHelper.addUploadInput = function(options) {
		options.container.addClass('fileinput-button');
		var uploadInput = $('<input/>').attr('type', 'file').attr('name', options.inputName + '[]').attr('data-url', Q.resolveUrl('~/File/TemporaryUpload')).attr('multiple', 'multiple').appendTo(options.container);
		if (options.allowMultiple) {
			uploadInput.attr('multiple', 'multiple');
		}
		uploadInput.fileupload({
			dataType: 'json',
			done: function(e, data) {
				var response = data.result;
				if (!ss.staticEquals(options.fileDone, null)) {
					options.fileDone(response, ss.cast(data.files[0].name, String), data);
				}
			},
			start: function() {
				Q.blockUI(null);
				if (ss.isValue(options.progress)) {
					options.progress.show();
				}
			},
			stop: function() {
				Q.blockUndo();
				if (ss.isValue(options.progress)) {
					options.progress.hide();
				}
			},
			progress: function(e1, data1) {
				if (ss.isValue(options.progress)) {
					var percent = ss.unbox(ss.cast(data1.loaded, Number)) / ss.unbox(ss.cast(data1.total, Number)) * 100;
					options.progress.children().css('width', percent.toString() + '%');
				}
			}
		});
		return uploadInput;
	};
	$Serenity_UploadHelper.checkImageConstraints = function(file, opt) {
		if (!file.IsImage && !opt.allowNonImage) {
			Q.alert('Yüklemeye çalıştığınız dosya bir resim değil!');
			return false;
		}
		if (opt.minSize > 0 && file.Size < opt.minSize) {
			Q.alert(ss.formatString('Yükleyeceğiniz dosya en az {0} boyutunda olmalı!', opt.minSize));
			return false;
		}
		if (opt.maxSize > 0 && file.Size > opt.maxSize) {
			Q.alert(ss.formatString('Yükleyeceğiniz dosya en çok {0} boyutunda olabilir!', opt.maxSize));
			return false;
		}
		if (!file.IsImage) {
			return true;
		}
		if (opt.minWidth > 0 && file.Width < opt.minWidth) {
			Q.alert(ss.formatString('Yükleyeceğiniz resim en az {0} genişliğinde olmalı!', opt.minWidth));
			return false;
		}
		if (opt.maxWidth > 0 && file.Width > opt.maxWidth) {
			Q.alert(ss.formatString('Yükleyeceğiniz dosya en çok {0} genişliğinde olabilir!', opt.maxWidth));
			return false;
		}
		if (opt.minHeight > 0 && file.Height < opt.minHeight) {
			Q.alert(ss.formatString('Yükleyeceğiniz resim en az {0} yüksekliğinde olmalı!', opt.minHeight));
			return false;
		}
		if (opt.maxHeight > 0 && file.Height > opt.maxHeight) {
			Q.alert(ss.formatString('Yükleyeceğiniz dosya en çok {0} yüksekliğinde olabilir!', opt.maxHeight));
			return false;
		}
		return true;
	};
	$Serenity_UploadHelper.fileNameSizeDisplay = function(name, bytes) {
		return name + ' (' + $Serenity_UploadHelper.fileSizeDisplay(bytes) + ')';
	};
	$Serenity_UploadHelper.fileSizeDisplay = function(bytes) {
		var byteSize = ss.round(bytes * 100 / 1024) * 0.01;
		var suffix = 'KB';
		if (byteSize > 1000) {
			byteSize = ss.round(byteSize * 0.001 * 100) * 0.01;
			suffix = 'MB';
		}
		var sizeParts = byteSize.toString().split(String.fromCharCode(46));
		var value;
		if (sizeParts.length > 1) {
			value = sizeParts[0] + '.' + sizeParts[1].substr(0, 2);
		}
		else {
			value = sizeParts[0];
		}
		return value + ' ' + suffix;
	};
	$Serenity_UploadHelper.hasImageExtension = function(filename) {
		if (ss.isNullOrUndefined(filename)) {
			return false;
		}
		filename = filename.toLowerCase();
		return ss.endsWithString(filename, '.jpg') || ss.endsWithString(filename, '.jpeg') || ss.endsWithString(filename, '.gif') || ss.endsWithString(filename, '.png');
	};
	$Serenity_UploadHelper.thumbFileName = function(filename) {
		filename = ss.coalesce(filename, '');
		var idx = filename.lastIndexOf('.');
		if (idx >= 0) {
			filename = filename.substr(0, idx);
		}
		return filename + '_t.jpg';
	};
	$Serenity_UploadHelper.dbFileUrl = function(filename) {
		filename = ss.replaceAllString(ss.coalesce(filename, ''), '\\', '/');
		return Q.resolveUrl('~/upload/') + filename;
	};
	$Serenity_UploadHelper.colorBox = function(link, options) {
		link.colorbox({ current: 'resim {current} / {total}', previous: 'önceki', next: 'sonraki', close: 'kapat' });
	};
	$Serenity_UploadHelper.populateFileSymbols = function(container, items, displayOriginalName, urlPrefix) {
		items = items || [];
		container.html('');
		for (var index = 0; index < items.length; index++) {
			var item = items[index];
			var li = $('<li/>').addClass('file-item').data('index', index);
			var isImage = $Serenity_UploadHelper.hasImageExtension(item.Filename);
			if (isImage) {
				li.addClass('file-image');
			}
			else {
				li.addClass('file-binary');
			}
			var editLink = '#' + index;
			var thumb = $('<a/>').addClass('thumb').appendTo(li);
			var originalName = ss.coalesce(item.OriginalName, '');
			if (isImage) {
				var fileName = item.Filename;
				if (ss.isValue(urlPrefix) && ss.isValue(fileName) && !ss.startsWithString(fileName, 'temporary/')) {
					fileName = urlPrefix + fileName;
				}
				thumb.attr('href', $Serenity_UploadHelper.dbFileUrl(fileName));
				thumb.attr('target', '_blank');
				if (!Q.isEmptyOrNull(originalName)) {
					thumb.attr('title', originalName);
				}
				thumb.css('backgroundImage', 'url(' + $Serenity_UploadHelper.dbFileUrl($Serenity_UploadHelper.thumbFileName(item.Filename)) + ')');
				$Serenity_UploadHelper.colorBox(thumb, new Object());
			}
			if (displayOriginalName) {
				$('<div/>').addClass('filename').text(originalName).attr('title', originalName).appendTo(li);
			}
			li.appendTo(container);
		}
		;
	};
	global.Serenity.UploadHelper = $Serenity_UploadHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.URLEditor
	var $Serenity_URLEditor = function(input) {
		$Serenity_StringEditor.call(this, input);
		input.addClass('url').attr('title', "URL 'http://www.site.com/sayfa' formatında girilmelidir.");
		input.bind('blur.' + this.uniqueName, function() {
			var validator = input.closest('form').data('validator');
			if (ss.isNullOrUndefined(validator)) {
				return;
			}
			if (!input.hasClass('error')) {
				return;
			}
			var value = Q.trimToNull(input.val());
			if (ss.isNullOrUndefined(value)) {
				return;
			}
			value = 'http://' + value;
			if (!!ss.referenceEquals($.validator.methods['url'].apply(validator, [value, input[0]]), true)) {
				input.val(value);
				validator.element(input[0]);
			}
		});
	};
	$Serenity_URLEditor.__typeName = 'Serenity.URLEditor';
	global.Serenity.URLEditor = $Serenity_URLEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ValidationHelper
	var $Serenity_ValidationHelper = function() {
	};
	$Serenity_ValidationHelper.__typeName = 'Serenity.ValidationHelper';
	$Serenity_ValidationHelper.asyncSubmit = function(form, validateBeforeSave, submitHandler) {
		var validator = form.validate();
		var valSettings = validator.settings;
		if (!!ss.isValue(valSettings.abortHandler)) {
			return false;
		}
		if (!ss.staticEquals(validateBeforeSave, null) && validateBeforeSave() === false) {
			return false;
		}
		valSettings['abortHandler'] = Q$Externals.validatorAbortHandler;
		valSettings['submitHandler'] = function() {
			if (!ss.staticEquals(submitHandler, null)) {
				submitHandler();
			}
			return false;
		};
		form.trigger('submit');
		return true;
	};
	$Serenity_ValidationHelper.submit = function(form, validateBeforeSave, submitHandler) {
		var validator = form.validate();
		var valSettings = validator.settings;
		if (!!ss.isValue(valSettings.abortHandler)) {
			return false;
		}
		if (!ss.staticEquals(validateBeforeSave, null) && validateBeforeSave() === false) {
			return false;
		}
		if (!validator.form()) {
			return false;
		}
		if (!ss.staticEquals(submitHandler, null)) {
			submitHandler();
		}
		return true;
	};
	$Serenity_ValidationHelper.getValidator = function(element) {
		var form = element.closest('form');
		if (form.length === 0) {
			return null;
		}
		return form.data('validator');
	};
	global.Serenity.ValidationHelper = $Serenity_ValidationHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ValidationExtensions
	var $Serenity_VX = function() {
	};
	$Serenity_VX.__typeName = 'Serenity.VX';
	$Serenity_VX.addValidationRule = function(widget, eventClass, rule) {
		return $Serenity_VX.addValidationRule$1(widget.get_element(), eventClass, rule);
	};
	$Serenity_VX.addValidationRule$1 = function(element, eventClass, rule) {
		if (element.length === 0) {
			return element;
		}
		if (ss.staticEquals(rule, null)) {
			throw new ss.Exception('rule is null!');
		}
		element.addClass('customValidate').bind('customValidate.' + eventClass, rule);
		return element;
	};
	$Serenity_VX.removeValidationRule = function(element, eventClass) {
		element.unbind('customValidate.' + eventClass);
		return element;
	};
	$Serenity_VX.validateElement = function(validator, widget) {
		return validator.element(widget.get_element()[0]);
	};
	global.Serenity.VX = $Serenity_VX;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Widget
	var $Serenity_Widget = function(element) {
		this.asyncPromise = null;
		this.widgetName = null;
		this.uniqueName = null;
		this.element = null;
		Serenity.ScriptContext.call(this);
		this.element = element;
		this.widgetName = $Serenity_WX.getWidgetName(ss.getInstanceType(this));
		this.uniqueName = this.widgetName + ($Serenity_Widget.$nextWidgetNumber++).toString();
		if (ss.isValue(element.data(this.widgetName))) {
			throw new ss.Exception(ss.formatString("The element already has widget '{0}'!", this.widgetName));
		}
		var self = this;
		element.bind('remove.' + this.widgetName, function(e) {
			self.destroy();
		}).data(this.widgetName, this);
		this.addCssClass();
		if (this.isAsyncWidget()) {
			window.setTimeout(ss.mkdel(this, function() {
				if (ss.isValue(element) && ss.isNullOrUndefined(this.asyncPromise)) {
					this.asyncPromise = this.initializeAsync();
				}
			}), 0);
		}
	};
	$Serenity_Widget.__typeName = 'Serenity.Widget';
	$Serenity_Widget.elementFor = function(TEditor) {
		return function() {
			return $Serenity_Widget.elementFor$1(TEditor);
		};
	};
	$Serenity_Widget.elementFor$1 = function(editorType) {
		var elementAttr = ss.getAttributes(editorType, Serenity.ElementAttribute, true);
		var elementHtml = ((elementAttr.length > 0) ? elementAttr[0].get_html() : '<input/>');
		return $(elementHtml);
	};
	$Serenity_Widget.createOfType = function(widgetType, element, options, init) {
		var widget;
		if (ss.isAssignableFrom($Serenity_IDialog, widgetType)) {
			widget = ss.cast(new widgetType(options), $Serenity_Widget);
			if (!ss.staticEquals(element, null)) {
				element(widget.element);
			}
		}
		else {
			var e = $Serenity_Widget.elementFor$1(widgetType);
			if (!ss.staticEquals(element, null)) {
				element(e);
			}
			widget = ss.cast(new widgetType(e, options), $Serenity_Widget);
		}
		widget.init(init);
		return widget;
	};
	$Serenity_Widget.create = function(TWidget) {
		return function(element, options, init) {
			return $Serenity_Widget.createOfType(TWidget, element, options, (ss.staticEquals(init, null) ? null : function(w) {
				init(w);
			}));
		};
	};
	$Serenity_Widget.createInside = function(TWidget) {
		return function(container, options, init) {
			return $Serenity_Widget.create(TWidget).call(null, function(e) {
				container.append(e);
			}, options, init);
		};
	};
	global.Serenity.Widget = $Serenity_Widget;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Widget
	var $Serenity_Widget$1 = function(TOptions) {
		var $type = function(element, opt) {
			this.options = null;
			$Serenity_Widget.call(this, element);
			this.options = opt || ss.createInstance(TOptions);
		};
		ss.registerGenericClassInstance($type, $Serenity_Widget$1, [TOptions], {}, function() {
			return $Serenity_Widget;
		}, function() {
			return [];
		});
		return $type;
	};
	$Serenity_Widget$1.__typeName = 'Serenity.Widget$1';
	ss.initGenericClass($Serenity_Widget$1, $asm, 1);
	global.Serenity.Widget$1 = $Serenity_Widget$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.WidgetPrototype
	var $Serenity_WidgetPrototype = function() {
	};
	$Serenity_WidgetPrototype.__typeName = 'Serenity.WidgetPrototype';
	global.Serenity.WidgetPrototype = $Serenity_WidgetPrototype;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.WidgetExtensions
	var $Serenity_WX = function() {
	};
	$Serenity_WX.__typeName = 'Serenity.WX';
	$Serenity_WX.getWidget = function(TWidget) {
		return function(element) {
			if (ss.isNullOrUndefined(element)) {
				throw new ss.ArgumentNullException('element');
			}
			if (element.length === 0) {
				throw new ss.Exception(ss.formatString("Searching for widget of type '{0}' on a non-existent element! ({1})", ss.getTypeFullName(TWidget), element.selector));
			}
			var widget = $Serenity_WX.tryGetWidget(TWidget).call(null, element);
			if (ss.isNullOrUndefined(widget)) {
				throw new ss.Exception(ss.formatString("Element has no widget of type '{0}'!", ss.getTypeFullName(TWidget)));
			}
			return widget;
		};
	};
	$Serenity_WX.tryGetWidget = function(TWidget) {
		return function(element) {
			if (ss.isNullOrUndefined(element)) {
				throw new ss.Exception("Argument 'element' is null!");
			}
			var widget;
			if (ss.isAssignableFrom(TWidget, $Serenity_Widget)) {
				var widgetName = $Serenity_WX.getWidgetName(TWidget);
				widget = ss.safeCast(element.data(widgetName), TWidget);
				if (ss.isValue(widget)) {
					return widget;
				}
			}
			var data = element.data();
			if (ss.isNullOrUndefined(data)) {
				return null;
			}
			var $t1 = ss.getEnumerator(Object.keys(data));
			try {
				while ($t1.moveNext()) {
					var key = $t1.current();
					widget = ss.safeCast(data[key], TWidget);
					if (ss.isValue(widget)) {
						return widget;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return null;
		};
	};
	$Serenity_WX.getWidgetName = function(type) {
		return ss.replaceAllString(ss.getTypeFullName(type), '.', '_');
	};
	$Serenity_WX.hasOriginalEvent = function(e) {
		return !!!(typeof(e.originalEvent) === 'undefined');
	};
	$Serenity_WX.change = function(widget, handler) {
		widget.get_element().bind('change.' + widget.get_uniqueName(), handler);
	};
	$Serenity_WX.changeSelect2 = function(widget, handler) {
		widget.get_element().bind('change.' + widget.get_uniqueName(), function(e, x) {
			if (!!($Serenity_WX.hasOriginalEvent(e) || !x)) {
				handler(e);
			}
		});
	};
	$Serenity_WX.getGridField = function(widget) {
		return widget.get_element().closest('.field');
	};
	$Serenity_WX.create = function(TWidget) {
		return function(initElement, options) {
			return $Serenity_Widget.create(TWidget).call(null, initElement, options, null);
		};
	};
	global.Serenity.WX = $Serenity_WX;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.CategoryAttribute
	var $Serenity_ComponentModel_CategoryAttribute = function(category) {
		this.$2$CategoryField = null;
		this.set_category(category);
	};
	$Serenity_ComponentModel_CategoryAttribute.__typeName = 'Serenity.ComponentModel.CategoryAttribute';
	global.Serenity.ComponentModel.CategoryAttribute = $Serenity_ComponentModel_CategoryAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.CssClassAttribute
	var $Serenity_ComponentModel_CssClassAttribute = function(cssClass) {
		this.$2$CssClassField = null;
		this.set_cssClass(cssClass);
	};
	$Serenity_ComponentModel_CssClassAttribute.__typeName = 'Serenity.ComponentModel.CssClassAttribute';
	global.Serenity.ComponentModel.CssClassAttribute = $Serenity_ComponentModel_CssClassAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.DefaultValueAttribute
	var $Serenity_ComponentModel_DefaultValueAttribute = function(defaultValue) {
		this.$2$ValueField = null;
		this.set_value(defaultValue);
	};
	$Serenity_ComponentModel_DefaultValueAttribute.__typeName = 'Serenity.ComponentModel.DefaultValueAttribute';
	global.Serenity.ComponentModel.DefaultValueAttribute = $Serenity_ComponentModel_DefaultValueAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.EditorOptionAttribute
	var $Serenity_ComponentModel_EditorOptionAttribute = function(key, value) {
		this.$2$KeyField = null;
		this.$2$ValueField = null;
		this.set_key(key);
		this.set_value(value);
	};
	$Serenity_ComponentModel_EditorOptionAttribute.__typeName = 'Serenity.ComponentModel.EditorOptionAttribute';
	global.Serenity.ComponentModel.EditorOptionAttribute = $Serenity_ComponentModel_EditorOptionAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.EditorTypeAttribute
	var $Serenity_ComponentModel_EditorTypeAttribute = function(editorType) {
		$Serenity_ComponentModel_EditorTypeAttributeBase.call(this, editorType);
	};
	$Serenity_ComponentModel_EditorTypeAttribute.__typeName = 'Serenity.ComponentModel.EditorTypeAttribute';
	global.Serenity.ComponentModel.EditorTypeAttribute = $Serenity_ComponentModel_EditorTypeAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.EditorTypeAttributeBase
	var $Serenity_ComponentModel_EditorTypeAttributeBase = function(type) {
		this.editorType = null;
		this.editorType = type;
	};
	$Serenity_ComponentModel_EditorTypeAttributeBase.__typeName = 'Serenity.ComponentModel.EditorTypeAttributeBase';
	global.Serenity.ComponentModel.EditorTypeAttributeBase = $Serenity_ComponentModel_EditorTypeAttributeBase;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.HiddenAttribute
	var $Serenity_ComponentModel_HiddenAttribute = function() {
	};
	$Serenity_ComponentModel_HiddenAttribute.__typeName = 'Serenity.ComponentModel.HiddenAttribute';
	global.Serenity.ComponentModel.HiddenAttribute = $Serenity_ComponentModel_HiddenAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.HintAttribute
	var $Serenity_ComponentModel_HintAttribute = function(hint) {
		this.$2$HintField = null;
		this.set_hint(hint);
	};
	$Serenity_ComponentModel_HintAttribute.__typeName = 'Serenity.ComponentModel.HintAttribute';
	global.Serenity.ComponentModel.HintAttribute = $Serenity_ComponentModel_HintAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.InsertableAttribute
	var $Serenity_ComponentModel_InsertableAttribute = function(insertable) {
		this.$2$ValueField = false;
		this.set_value(insertable);
	};
	$Serenity_ComponentModel_InsertableAttribute.__typeName = 'Serenity.ComponentModel.InsertableAttribute';
	global.Serenity.ComponentModel.InsertableAttribute = $Serenity_ComponentModel_InsertableAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.MaxLengthAttribute
	var $Serenity_ComponentModel_MaxLengthAttribute = function(maxLength) {
		this.$2$MaxLengthField = 0;
		this.set_maxLength(maxLength);
	};
	$Serenity_ComponentModel_MaxLengthAttribute.__typeName = 'Serenity.ComponentModel.MaxLengthAttribute';
	global.Serenity.ComponentModel.MaxLengthAttribute = $Serenity_ComponentModel_MaxLengthAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.OneWayAttribute
	var $Serenity_ComponentModel_OneWayAttribute = function() {
	};
	$Serenity_ComponentModel_OneWayAttribute.__typeName = 'Serenity.ComponentModel.OneWayAttribute';
	global.Serenity.ComponentModel.OneWayAttribute = $Serenity_ComponentModel_OneWayAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.PlaceholderAttribute
	var $Serenity_ComponentModel_PlaceholderAttribute = function(value) {
		this.$2$ValueField = null;
		this.set_value(value);
	};
	$Serenity_ComponentModel_PlaceholderAttribute.__typeName = 'Serenity.ComponentModel.PlaceholderAttribute';
	global.Serenity.ComponentModel.PlaceholderAttribute = $Serenity_ComponentModel_PlaceholderAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.ReadOnlyAttribute
	var $Serenity_ComponentModel_ReadOnlyAttribute = function(readOnly) {
		this.$2$ValueField = false;
		this.set_value(readOnly);
	};
	$Serenity_ComponentModel_ReadOnlyAttribute.__typeName = 'Serenity.ComponentModel.ReadOnlyAttribute';
	global.Serenity.ComponentModel.ReadOnlyAttribute = $Serenity_ComponentModel_ReadOnlyAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.RequiredAttribute
	var $Serenity_ComponentModel_RequiredAttribute = function(isRequired) {
		this.$2$IsRequiredField = false;
		this.set_isRequired(isRequired);
	};
	$Serenity_ComponentModel_RequiredAttribute.__typeName = 'Serenity.ComponentModel.RequiredAttribute';
	global.Serenity.ComponentModel.RequiredAttribute = $Serenity_ComponentModel_RequiredAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.ComponentModel.UpdatableAttribute
	var $Serenity_ComponentModel_UpdatableAttribute = function(updatable) {
		this.$2$ValueField = false;
		this.set_value(updatable);
	};
	$Serenity_ComponentModel_UpdatableAttribute.__typeName = 'Serenity.ComponentModel.UpdatableAttribute';
	global.Serenity.ComponentModel.UpdatableAttribute = $Serenity_ComponentModel_UpdatableAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Reporting.ReportDesignPanel
	var $Serenity_Reporting_ReportDesignPanel = function(element, options) {
		this.$5$ReportKeyField = null;
		ss.makeGenericType($Serenity_TemplatedWidget$1, [Object]).call(this, element, options);
		element.addClass('s-ReportDesignPanel');
		this.byId$1('AddButton').click(ss.mkdel(this, this.addButtonClick));
		this.byId$1('EditButton').click(ss.mkdel(this, this.editButtonClick));
		this.get_element().find('a').toggle(false);
		//Utils.HasRight("ReportDesign"));
	};
	$Serenity_Reporting_ReportDesignPanel.__typeName = 'Serenity.Reporting.ReportDesignPanel';
	global.Serenity.Reporting.ReportDesignPanel = $Serenity_Reporting_ReportDesignPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Reporting.ReportDialog
	var $Serenity_Reporting_ReportDialog = function(opt) {
		this.$propertyItems = null;
		this.$propertyGrid = null;
		this.$reportKey = null;
		ss.makeGenericType($Serenity_TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		if (ss.isValue(opt.reportKey)) {
			this.loadReport(opt.reportKey);
		}
	};
	$Serenity_Reporting_ReportDialog.__typeName = 'Serenity.Reporting.ReportDialog';
	global.Serenity.Reporting.ReportDialog = $Serenity_Reporting_ReportDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.Reporting.ReportPage
	var $Serenity_Reporting_ReportPage = function(div) {
		$Serenity_Widget.call(this, div);
		$('.report-link').click(ss.mkdel(this, this.$reportLinkClick));
		$('div.line').click(ss.mkdel(this, this.$categoryClick));
		var self = this;
		var $t2 = $('#QuickSearchInput');
		var $t1 = $Serenity_QuickSearchInputOptions.$ctor();
		$t1.onSearch = function(field, text) {
			self.$updateMatchFlags(text);
		};
		new $Serenity_QuickSearchInput($t2, $t1);
	};
	$Serenity_Reporting_ReportPage.__typeName = 'Serenity.Reporting.ReportPage';
	global.Serenity.Reporting.ReportPage = $Serenity_Reporting_ReportPage;
	////////////////////////////////////////////////////////////////////////////////
	// System.ComponentModel.DisplayNameAttribute
	var $System_ComponentModel_DisplayNameAttribute = function(displayName) {
		this.$2$DisplayNameField = null;
		this.set_displayName(displayName);
	};
	$System_ComponentModel_DisplayNameAttribute.__typeName = 'System.ComponentModel.DisplayNameAttribute';
	global.System.ComponentModel.DisplayNameAttribute = $System_ComponentModel_DisplayNameAttribute;
	ss.initClass($Serenity_Widget, $asm, {
		init: function(action) {
			var promise = this.initialize();
			if (!ss.staticEquals(action, null)) {
				promise.then(ss.mkdel(this, function() {
					action(this);
				}), null);
			}
			return this;
		},
		initialize: function() {
			if (!this.isAsyncWidget()) {
				return RSVP.resolve();
			}
			if (ss.isNullOrUndefined(this.asyncPromise)) {
				this.asyncPromise = this.initializeAsync();
			}
			return this.asyncPromise;
		},
		isAsyncWidget: function() {
			return ss.isInstanceOfType(this, $Serenity_IAsyncInit);
		},
		initializeAsync: function() {
			return RSVP.resolve();
		},
		destroy: function() {
			this.element.removeClass('s-' + ss.getTypeName(ss.getInstanceType(this)));
			this.element.unbind('.' + this.widgetName).removeData(this.widgetName);
			this.element = null;
			this.asyncPromise = null;
		},
		addCssClass: function() {
			this.element.addClass(this.getCssClass());
		},
		getCssClass: function() {
			var klass = 's-' + ss.getTypeName(ss.getInstanceType(this));
			var fullClass = ss.replaceAllString(ss.getTypeFullName(ss.getInstanceType(this)), '.', '-');
			for (var $t1 = 0; $t1 < Q$Config.rootNamespaces.length; $t1++) {
				var k = Q$Config.rootNamespaces[$t1];
				if (ss.startsWithString(fullClass, k + '-')) {
					fullClass = fullClass.substr(k.length + 1);
					break;
				}
			}
			fullClass = 's-' + fullClass;
			if (ss.referenceEquals(klass, fullClass)) {
				return klass;
			}
			return klass + ' ' + fullClass;
		},
		get_element: function() {
			return this.element;
		},
		get_uniqueName: function() {
			return this.uniqueName;
		},
		get_widgetName: function() {
			return this.widgetName;
		}
	}, Serenity.ScriptContext);
	ss.initInterface($Serenity_IStringValue, $asm, { get_value: null, set_value: null });
	ss.initClass($Serenity_$FilterPanel$FieldSelect, $asm, {
		emptyItemText: function() {
			if (Q.isEmptyOrNull(this.get_value())) {
				return Q.text('Controls.FilterPanel.SelectField');
			}
			return null;
		},
		getSelect2Options: function() {
			var opt = ss.makeGenericType($Serenity_Select2Editor$2, [Object, Object]).prototype.getSelect2Options.call(this);
			opt.allowClear = false;
			return opt;
		}
	}, ss.makeGenericType($Serenity_Select2Editor$2, [Object, Object]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_$FilterPanel$OperatorSelect, $asm, {
		emptyItemText: function() {
			return null;
		},
		getSelect2Options: function() {
			var opt = ss.makeGenericType($Serenity_Select2Editor$2, [Object, Object]).prototype.getSelect2Options.call(this);
			opt.allowClear = false;
			return opt;
		}
	}, ss.makeGenericType($Serenity_Select2Editor$2, [Object, Object]), [$Serenity_IStringValue]);
	ss.initInterface($Serenity_IAsyncInit, $asm, {});
	ss.initClass($Serenity_AsyncLookupEditor, $asm, {
		getLookupKey: function() {
			var $t1 = this.options.lookupKey;
			if (ss.isNullOrUndefined($t1)) {
				$t1 = ss.makeGenericType($Serenity_LookupEditorBase$2, [$Serenity_LookupEditorOptions, Object]).prototype.getLookupKey.call(this);
			}
			return $t1;
		}
	}, ss.makeGenericType($Serenity_LookupEditorBase$2, [$Serenity_LookupEditorOptions, Object]), [$Serenity_IStringValue, $Serenity_IAsyncInit]);
	ss.initInterface($Serenity_IFiltering, $asm, { get_field: null, set_field: null, get_container: null, set_container: null, get_operator: null, set_operator: null, createEditor: null, getCriteria: null, getOperators: null, loadState: null, saveState: null });
	ss.initClass($Serenity_BaseFiltering, $asm, {
		get_field: function() {
			return this.$1$FieldField;
		},
		set_field: function(value) {
			this.$1$FieldField = value;
		},
		get_container: function() {
			return this.$1$ContainerField;
		},
		set_container: function(value) {
			this.$1$ContainerField = value;
		},
		get_operator: function() {
			return this.$1$OperatorField;
		},
		set_operator: function(value) {
			this.$1$OperatorField = value;
		},
		getOperators: null,
		appendNullableOperators: function(list) {
			if (!this.isNullable()) {
				return list;
			}
			list.push({ key: $Serenity_FilterOperators.isNotNull });
			list.push({ key: $Serenity_FilterOperators.isNull });
			return list;
		},
		appendComparisonOperators: function(list) {
			list.push({ key: $Serenity_FilterOperators.EQ });
			list.push({ key: $Serenity_FilterOperators.NE });
			list.push({ key: $Serenity_FilterOperators.LT });
			list.push({ key: $Serenity_FilterOperators.LE });
			list.push({ key: $Serenity_FilterOperators.GT });
			list.push({ key: $Serenity_FilterOperators.GE });
			return list;
		},
		isNullable: function() {
			return !this.get_field().required;
		},
		createEditor: function() {
			switch (this.get_operator().key) {
				case 'true':
				case 'false':
				case 'isnull':
				case 'isnotnull': {
					return;
				}
				case 'contains':
				case 'startswith':
				case 'eq':
				case 'ne':
				case 'lt':
				case 'le':
				case 'gt':
				case 'ge': {
					this.get_container().html('<input type="text"/>');
					return;
				}
			}
			throw new ss.Exception(ss.formatString("Filtering '{0}' has no editor for '{1}' operator", ss.getTypeName(ss.getInstanceType(this)), this.get_operator().key));
		},
		operatorFormat: function(op) {
			var $t2 = op.format;
			if (ss.isNullOrUndefined($t2)) {
				var $t1 = Q.tryGetText('Controls.FilterPanel.OperatorFormats.' + op.key);
				if (ss.isNullOrUndefined($t1)) {
					$t1 = op.key;
				}
				$t2 = $t1;
			}
			return $t2;
		},
		getTitle: function(field) {
			var $t2 = Q.tryGetText(field.title);
			if (ss.isNullOrUndefined($t2)) {
				var $t1 = field.title;
				if (ss.isNullOrUndefined($t1)) {
					$t1 = field.name;
				}
				$t2 = $t1;
			}
			return $t2;
		},
		displayText: function(op, values) {
			if (values.length === 0) {
				return ss.formatString(this.operatorFormat(op), this.getTitle(this.get_field()));
			}
			else if (values.length === 1) {
				return ss.formatString(this.operatorFormat(op), this.getTitle(this.get_field()), values[0]);
			}
			else {
				return ss.formatString(this.operatorFormat(op), this.getTitle(this.get_field()), values[0], values[1]);
			}
		},
		getCriteriaField: function() {
			return this.get_field().name;
		},
		getCriteria: function(displayText) {
			var text;
			switch (this.get_operator().key) {
				case 'true': {
					displayText.$ = this.displayText(this.get_operator(), []);
					return [[this.getCriteriaField()], '=', true];
				}
				case 'false': {
					displayText.$ = this.displayText(this.get_operator(), []);
					return [[this.getCriteriaField()], '=', false];
				}
				case 'isnull': {
					displayText.$ = this.displayText(this.get_operator(), []);
					return ['is null', [this.getCriteriaField()]];
				}
				case 'isnotnull': {
					displayText.$ = this.displayText(this.get_operator(), []);
					return ['is not null', [this.getCriteriaField()]];
				}
				case 'contains': {
					text = this.getEditorText();
					displayText.$ = this.displayText(this.get_operator(), [text]);
					return [[this.getCriteriaField()], 'like', '%' + text + '%'];
				}
				case 'startswith': {
					text = this.getEditorText();
					displayText.$ = this.displayText(this.get_operator(), [text]);
					return [[this.getCriteriaField()], 'like', text + '%'];
				}
				case 'eq':
				case 'ne':
				case 'lt':
				case 'le':
				case 'gt':
				case 'ge': {
					text = this.getEditorText();
					displayText.$ = this.displayText(this.get_operator(), [text]);
					return [[this.getCriteriaField()], $Serenity_FilterOperators.toCriteriaOperator[this.get_operator().key], this.getEditorValue()];
				}
			}
			throw new ss.Exception(ss.formatString("Filtering '{0}' has no handler for '{1}' operator", ss.getTypeName(ss.getInstanceType(this)), this.get_operator().key));
		},
		loadState: function(state) {
			var input = this.get_container().find(':input').first();
			input.val(ss.safeCast(state, String));
		},
		saveState: function() {
			switch (this.get_operator().key) {
				case 'contains':
				case 'startswith':
				case 'eq':
				case 'ne':
				case 'lt':
				case 'le':
				case 'gt':
				case 'ge': {
					var input = this.get_container().find(':input').first();
					return input.val();
				}
			}
			return null;
		},
		argumentNull: function() {
			return new ss.ArgumentNullException('value', Q.text('Controls.FilterPanel.ValueRequired'));
		},
		getEditorValue: function() {
			var input = this.get_container().find(':input').not('.select2-focusser').first();
			if (input.length !== 1) {
				var $t1 = this.get_field().title;
				if (ss.isNullOrUndefined($t1)) {
					$t1 = this.get_field().name;
				}
				throw new ss.Exception(ss.formatString("Couldn't find input in filter container for {0}", $t1));
			}
			var value;
			if (ss.isValue(input.data('select2'))) {
				value = ss.safeCast(input.select2('val'), String);
			}
			else {
				value = input.val();
			}
			value = ss.coalesce(value, '').trim();
			if (value.length === 0) {
				throw this.argumentNull();
			}
			return value;
		},
		getEditorText: function() {
			var input = this.get_container().find(':input').not('.select2-focusser').first();
			if (input.length === 0) {
				return this.get_container().text().trim();
			}
			var value;
			if (ss.isValue(input.data('select2'))) {
				var $t1 = input.select2('data');
				if (ss.isNullOrUndefined($t1)) {
					$t1 = new Object();
				}
				value = ss.cast($t1.text, String);
			}
			else {
				value = input.val();
			}
			return value;
		}
	}, null, [$Serenity_IFiltering]);
	ss.initInterface($Serenity_IBooleanValue, $asm, { get_value: null, set_value: null });
	ss.initClass($Serenity_BooleanEditor, $asm, {
		get_value: function() {
			return this.element.is(':checked');
		},
		set_value: function(value) {
			this.get_element().prop('checked', !!value);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]), [$Serenity_IBooleanValue]);
	ss.initClass($Serenity_BooleanFiltering, $asm, {
		getOperators: function() {
			var $t1 = [];
			$t1.push({ key: $Serenity_FilterOperators.isTrue });
			$t1.push({ key: $Serenity_FilterOperators.isFalse });
			return this.appendNullableOperators($t1);
		}
	}, $Serenity_BaseFiltering, [$Serenity_IFiltering]);
	ss.initInterface($Serenity_IGetEditValue, $asm, { getEditValue: null });
	ss.initInterface($Serenity_ISetEditValue, $asm, { setEditValue: null });
	ss.initClass($Serenity_CheckListEditor, $asm, {
		getItems: function() {
			return this.options.items || [];
		},
		updateItems: function() {
			var items = this.getItems();
			//ClearItems();
			//
			//if (items.Count > 0)
			//{
			//bool isStrings = Script.TypeOf(items[0]) == "string";
			//
			//foreach (dynamic item in items)
			//{
			//string key = isStrings ? item : item[0];
			//string text = isStrings ? item : item[1] ?? item[0];
			//AddItem(key, text);
			//}
			//}
		},
		getEditValue: function(property, target) {
		},
		setEditValue: function(source, property) {
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_CheckListEditorOptions]), [$Serenity_IGetEditValue, $Serenity_ISetEditValue]);
	ss.initClass($Serenity_CheckListEditorOptions, $asm, {});
	ss.initInterface($Serenity_IDataGrid, $asm, { getElement: null, getGrid: null, getView: null, getFilterStore: null });
	ss.initClass($Serenity_CustomValidation, $asm, {});
	ss.initInterface($Serenity_IReadOnly, $asm, { get_readOnly: null, set_readOnly: null });
	ss.initClass($Serenity_DateEditor, $asm, {
		get_value: function() {
			var value = this.element.val().trim();
			if (ss.isValue(value) && value.length === 0) {
				return null;
			}
			return Q.formatDate(Q$Externals.parseDate(value), 'yyyy-MM-dd');
		},
		set_value: function(value) {
			if (ss.isNullOrUndefined(value)) {
				this.element.val('');
			}
			else if (value === 'Today') {
				this.element.val(Q.formatDate(ss.today(), null));
			}
			else {
				this.element.val(Q.formatDate(Q$Externals.parseISODateTime(value), null));
			}
		},
		get_valueAsDate: function() {
			if (ss.isNullOrEmptyString(this.get_value())) {
				return null;
			}
			return Q.parseISODateTime(this.get_value());
		},
		set_valueAsDate: function(value) {
			if (ss.staticEquals(value, null)) {
				this.set_value(null);
			}
			this.set_value(Q.formatDate(value, 'yyyy-MM-dd'));
		},
		get_readOnly: function() {
			return this.element.hasClass('readonly');
		},
		set_readOnly: function(value) {
			if (value !== this.get_readOnly()) {
				if (value) {
					this.element.addClass('readonly').attr('readonly', 'readonly');
					this.element.nextAll('.ui-datepicker-trigger').css('opacity', '0.1');
				}
				else {
					this.element.removeClass('readonly').removeAttr('readonly');
					this.element.nextAll('.ui-datepicker-trigger').css('opacity', '1');
				}
			}
		},
		get_minValue: function() {
			return this.$4$MinValueField;
		},
		set_minValue: function(value) {
			this.$4$MinValueField = value;
		},
		get_maxValue: function() {
			return this.$4$MaxValueField;
		},
		set_maxValue: function(value) {
			this.$4$MaxValueField = value;
		},
		get_minDate: function() {
			return Q.parseISODateTime(this.get_minValue());
		},
		set_minDate: function(value) {
			this.set_minValue(Q.formatDate(value, 'yyyy-MM-dd'));
		},
		get_maxDate: function() {
			return Q.parseISODateTime(this.get_maxValue());
		},
		set_maxDate: function(value) {
			this.set_maxValue(Q.formatDate(value, 'yyyy-MM-dd'));
		},
		get_sqlMinMax: function() {
			return this.get_minValue() === '1753-01-01' && this.get_maxValue() === '9999-12-31';
		},
		set_sqlMinMax: function(value) {
			if (value) {
				this.set_minValue('1753-01-01');
				this.set_maxValue('9999-12-31');
			}
			else {
				this.set_minValue(null);
				this.set_maxValue(null);
			}
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]), [$Serenity_IStringValue, $Serenity_IReadOnly]);
	ss.initClass($Serenity_DateFiltering, $asm, {
		getOperators: function() {
			return this.appendNullableOperators(this.appendComparisonOperators([]));
		}
	}, ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_DateEditor]), [$Serenity_IFiltering]);
	ss.initClass($Serenity_DateTimeEditor, $asm, {
		get_value: function() {
			var value = this.element.val().trim();
			if (ss.isValue(value) && value.length === 0) {
				return null;
			}
			var datePart = Q.formatDate(Q$Externals.parseDate(value), 'yyyy-MM-dd');
			var timePart = this.$time.val();
			return datePart + 'T' + timePart + ':00.000';
		},
		set_value: function(value) {
			if (ss.isNullOrUndefined(value)) {
				this.element.val('');
				this.$time.val('00:00');
			}
			else if (value === 'Today') {
				this.element.val(Q.formatDate(ss.today(), null));
				this.$time.val('00:00');
			}
			else {
				var val = Q$Externals.parseISODateTime(value);
				this.element.val(Q.formatDate(val, null));
				this.$time.val(Q.formatDate(val, 'HH:mm'));
			}
		},
		get_valueAsDate: function() {
			if (ss.isNullOrEmptyString(this.get_value())) {
				return null;
			}
			return Q.parseISODateTime(this.get_value());
		},
		set_valueAsDate: function(value) {
			if (ss.staticEquals(value, null)) {
				this.set_value(null);
			}
			this.set_value(Q.formatDate(value, 'yyyy-MM-ddTHH:mm'));
		},
		get_minValue: function() {
			return this.$4$MinValueField;
		},
		set_minValue: function(value) {
			this.$4$MinValueField = value;
		},
		get_maxValue: function() {
			return this.$4$MaxValueField;
		},
		set_maxValue: function(value) {
			this.$4$MaxValueField = value;
		},
		get_minDate: function() {
			return Q.parseISODateTime(this.get_minValue());
		},
		set_minDate: function(value) {
			this.set_minValue(Q.formatDate(value, 'yyyy-MM-ddTHH:mm:ss'));
		},
		get_maxDate: function() {
			return Q.parseISODateTime(this.get_maxValue());
		},
		set_maxDate: function(value) {
			this.set_maxValue(Q.formatDate(value, 'yyyy-MM-ddTHH:mm:ss'));
		},
		get_sqlMinMax: function() {
			return this.get_minValue() === '1753-01-01' && this.get_maxValue() === '9999-12-31';
		},
		set_sqlMinMax: function(value) {
			if (value) {
				this.set_minValue('1753-01-01');
				this.set_maxValue('9999-12-31');
			}
			else {
				this.set_minValue(null);
				this.set_maxValue(null);
			}
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_DateTimeFiltering, $asm, {
		getOperators: function() {
			return this.appendNullableOperators(this.appendComparisonOperators([]));
		},
		getCriteria: function(displayText) {
			switch (this.get_operator().key) {
				case 'eq':
				case 'ne':
				case 'lt':
				case 'le':
				case 'gt':
				case 'ge': {
					{
						var text = this.getEditorText();
						displayText.$ = this.displayText(this.get_operator(), [text]);
						var date = Q.parseISODateTime(ss.cast(this.getEditorValue(), String));
						date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
						var next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
						var criteria = [this.getCriteriaField()];
						var dateValue = Q.formatDate(date, 'yyyy-MM-dd');
						var nextValue = Q.formatDate(next, 'yyyy-MM-dd');
						switch (this.get_operator().key) {
							case 'eq': {
								return Serenity.Criteria.join([criteria, '>=', dateValue], 'and', [criteria, '<', nextValue]);
							}
							case 'ne': {
								return Serenity.Criteria.paren(Serenity.Criteria.join([criteria, '<', dateValue], 'or', [criteria, '>', nextValue]));
							}
							case 'lt': {
								return [criteria, '<', dateValue];
							}
							case 'le': {
								return [criteria, '<', nextValue];
							}
							case 'gt': {
								return [criteria, '>=', nextValue];
							}
							case 'ge': {
								return [criteria, '>=', dateValue];
							}
						}
					}
					break;
				}
			}
			return $Serenity_BaseFiltering.prototype.getCriteria.call(this, displayText);
		}
	}, ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_DateEditor]), [$Serenity_IFiltering]);
	ss.initClass($Serenity_SelectEditor, $asm, {
		getItems: function() {
			return this.options.items || [];
		},
		emptyItemText: function() {
			if (!ss.isNullOrEmptyString(this.options.emptyOptionText)) {
				return this.options.emptyOptionText;
			}
			return ss.makeGenericType($Serenity_Select2Editor$2, [$Serenity_SelectEditorOptions, Object]).prototype.emptyItemText.call(this);
		},
		updateItems: function() {
			var items = this.getItems();
			this.clearItems();
			if (items.length > 0) {
				var isStrings = typeof(items[0]) === 'string';
				for (var $t1 = 0; $t1 < items.length; $t1++) {
					var item = items[$t1];
					var key = ss.cast((isStrings ? item : item[0]), String);
					var $t3;
					if (isStrings) {
						$t3 = item;
					}
					else {
						var $t2 = item[1];
						if (ss.isNullOrUndefined($t2)) {
							$t2 = item[0];
						}
						$t3 = $t2;
					}
					var text = ss.cast($t3, String);
					this.addItem(key, text, item, false);
				}
			}
		}
	}, ss.makeGenericType($Serenity_Select2Editor$2, [$Serenity_SelectEditorOptions, Object]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_DateYearEditor, $asm, {
		getItems: function() {
			var opt = this.options;
			if (ss.isValue(opt.items) && opt.items.length >= 1) {
				return opt.items;
			}
			var years = [];
			var minYear = (new Date()).getFullYear();
			var maxYear = (new Date()).getFullYear();
			if (ss.isValue(opt.minYear)) {
				opt.minYear = opt.minYear.toString();
				if (ss.startsWithString(opt.minYear, '-')) {
					minYear -= parseInt(opt.minYear.substr(1), 10);
				}
				else if (ss.startsWithString(opt.minYear, '+')) {
					minYear += parseInt(opt.minYear.substr(1), 10);
				}
				else {
					minYear = parseInt(opt.minYear, 10);
				}
			}
			if (ss.isValue(opt.maxYear)) {
				opt.maxYear = opt.maxYear.toString();
				if (ss.startsWithString(opt.maxYear, '-')) {
					maxYear -= parseInt(opt.maxYear.substr(1), 10);
				}
				else if (ss.startsWithString(opt.maxYear, '+')) {
					maxYear += parseInt(opt.maxYear.substr(1), 10);
				}
				else {
					maxYear = parseInt(opt.maxYear, 10);
				}
			}
			if (opt.descending) {
				for (var i = maxYear; i >= minYear; i--) {
					years.push(i.toString());
				}
			}
			else {
				for (var i1 = minYear; i1 <= maxYear; i1++) {
					years.push(i1.toString());
				}
			}
			return years;
		}
	}, $Serenity_SelectEditor, [$Serenity_IStringValue]);
	ss.initClass($Serenity_SelectEditorOptions, $asm, {});
	ss.initClass($Serenity_DateYearEditorOptions, $asm, {}, $Serenity_SelectEditorOptions);
	ss.initInterface($Serenity_IDoubleValue, $asm, { get_value: null, set_value: null });
	ss.initClass($Serenity_DecimalEditor, $asm, {
		get_value: function() {
			var val = this.element.autoNumeric('get');
			if (!!(ss.isNullOrUndefined(val) || ss.referenceEquals(val.Length, 0))) {
				return null;
			}
			else {
				return ss.cast(parseFloat(ss.cast(val, String)), Number);
			}
		},
		set_value: function(value) {
			if (ss.isNullOrUndefined(value) || value === '') {
				this.element.val('');
			}
			else {
				this.element.autoNumeric('set', value);
			}
		},
		get_isValid: function() {
			return !isNaN(this.get_value());
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_DecimalEditorOptions]), [$Serenity_IDoubleValue]);
	ss.initClass($Serenity_DecimalEditorOptions, $asm, {});
	ss.initClass($Serenity_DecimalFiltering, $asm, {
		getOperators: function() {
			return this.appendNullableOperators(this.appendComparisonOperators([]));
		}
	}, ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_DecimalEditor]), [$Serenity_IFiltering]);
	ss.initClass($Serenity_DialogExtensions, $asm, {});
	ss.initClass($Serenity_DialogTypeRegistry, $asm, {});
	ss.initClass($Serenity_EditorFiltering, $asm, {
		get_editorType: function() {
			return this.$3$EditorTypeField;
		},
		set_editorType: function(value) {
			this.$3$EditorTypeField = value;
		},
		get_useRelative: function() {
			return this.$3$UseRelativeField;
		},
		set_useRelative: function(value) {
			this.$3$UseRelativeField = value;
		},
		get_useLike: function() {
			return this.$3$UseLikeField;
		},
		set_useLike: function(value) {
			this.$3$UseLikeField = value;
		},
		getOperators: function() {
			var list = [];
			list.push({ key: $Serenity_FilterOperators.EQ });
			list.push({ key: $Serenity_FilterOperators.NE });
			if (this.get_useRelative()) {
				list.push({ key: $Serenity_FilterOperators.LT });
				list.push({ key: $Serenity_FilterOperators.LE });
				list.push({ key: $Serenity_FilterOperators.GT });
				list.push({ key: $Serenity_FilterOperators.GE });
			}
			if (this.get_useLike()) {
				list.push({ key: $Serenity_FilterOperators.contains });
				list.push({ key: $Serenity_FilterOperators.startsWith });
			}
			this.appendNullableOperators(list);
			return list;
		},
		useEditor: function() {
			return ss.referenceEquals(this.get_operator().key, $Serenity_FilterOperators.EQ) || ss.referenceEquals(this.get_operator().key, $Serenity_FilterOperators.NE) || this.get_useRelative() && (ss.referenceEquals(this.get_operator().key, $Serenity_FilterOperators.LT) || ss.referenceEquals(this.get_operator().key, $Serenity_FilterOperators.LE) || ss.referenceEquals(this.get_operator().key, $Serenity_FilterOperators.GT) || ss.referenceEquals(this.get_operator().key, $Serenity_FilterOperators.GE));
		},
		getEditorOptions: function() {
			var opt = ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_Widget]).prototype.getEditorOptions.call(this);
			if (this.useEditor() && ss.referenceEquals(this.get_editorType(), this.get_field().editorType)) {
				opt = $.extend(opt, this.get_field().editorParams);
			}
			return opt;
		},
		createEditor: function() {
			if (this.useEditor()) {
				var editorType = $Serenity_EditorTypeRegistry.get(this.get_editorType());
				this.editor = $Serenity_Widget.createOfType(editorType, ss.mkdel(this, function(e) {
					e.appendTo(this.get_container());
				}), this.getEditorOptions(), null);
				return;
			}
			ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_Widget]).prototype.createEditor.call(this);
		},
		useIdField: function() {
			return this.useEditor();
		},
		getEditorText: function() {
			return $Serenity_BaseFiltering.prototype.getEditorText.call(this);
		}
	}, ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_Widget]), [$Serenity_IFiltering]);
	ss.initClass($Serenity_EditorTypeEditor, $asm, {
		getItems: function() {
			if (ss.isNullOrUndefined($Serenity_EditorTypeEditor.$editorTypeList)) {
				$Serenity_EditorTypeEditor.$editorTypeList = [];
				var $t1 = new ss.ObjectEnumerator($Serenity_PublicEditorTypes.get_registeredTypes());
				try {
					while ($t1.moveNext()) {
						var info = $t1.current();
						$Serenity_EditorTypeEditor.$editorTypeList.push([info.key, info.value.displayName]);
					}
				}
				finally {
					$t1.dispose();
				}
				$Serenity_EditorTypeEditor.$editorTypeList.sort(function(x, y) {
					var xn = x[1];
					var yn = y[1];
					return Q$Externals.turkishLocaleCompare(xn, yn);
				});
			}
			return $Serenity_EditorTypeEditor.$editorTypeList;
		}
	}, $Serenity_SelectEditor, [$Serenity_IStringValue]);
	ss.initClass($Serenity_EditorTypeRegistry, $asm, {});
	ss.initClass($Serenity_EmailEditor, $asm, {
		get_value: function() {
			var domain = this.element.nextAll('.emaildomain');
			var value = this.element.val();
			var domainValue = domain.val();
			if (Q.isEmptyOrNull(value)) {
				if (this.options.readOnlyDomain || Q.isEmptyOrNull(domainValue)) {
					return '';
				}
				return '@' + domainValue;
			}
			return value + '@' + domainValue;
		},
		set_value: function(value) {
			var domain = this.element.nextAll('.emaildomain');
			value = Q.trimToNull(value);
			if (ss.isNullOrUndefined(value)) {
				if (!this.options.readOnlyDomain) {
					domain.val('');
				}
				this.element.val('');
			}
			else {
				var parts = value.split('@');
				if (parts.length > 1) {
					if (!this.options.readOnlyDomain) {
						domain.val(parts[1]);
						this.element.val(parts[0]);
					}
					else if (!Q.isEmptyOrNull(this.options.domain)) {
						if (!ss.referenceEquals(parts[1], this.options.domain)) {
							this.element.val(value);
						}
						else {
							this.element.val(parts[0]);
						}
					}
					else {
						this.element.val(parts[0]);
					}
				}
				else {
					this.element.val(parts[0]);
				}
			}
		},
		get_readOnly: function() {
			var domain = this.element.nextAll('.emaildomain');
			return !(ss.isNullOrUndefined(this.element.attr('readonly')) && (!this.options.readOnlyDomain || ss.isNullOrUndefined(domain.attr('readonly'))));
		},
		set_readOnly: function(value) {
			var domain = this.element.nextAll('.emaildomain');
			if (value) {
				this.element.attr('readonly', 'readonly').addClass('readonly');
				if (!this.options.readOnlyDomain) {
					domain.attr('readonly', 'readonly').addClass('readonly');
				}
			}
			else {
				this.element.removeAttr('readonly').removeClass('readonly');
				if (!this.options.readOnlyDomain) {
					domain.removeAttr('readonly').removeClass('readonly');
				}
			}
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_EmailEditorOptions]), [$Serenity_IStringValue, $Serenity_IReadOnly]);
	ss.initClass($Serenity_EmailEditorOptions, $asm, {});
	ss.initInterface($Serenity_IDialog, $asm, { dialogOpen: null });
	ss.initInterface($Serenity_IEditDialog, $asm, { load: null }, [$Serenity_IDialog]);
	ss.initClass($Serenity_EnumEditor, $asm, {
		updateItems: function() {
			this.clearItems();
			var enumType = Serenity.EnumTypeRegistry.get(this.options.enumKey);
			var $t1 = ss.Enum.getValues(enumType);
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var x = $t1[$t2];
				var name = ss.Enum.toString(enumType, x);
				this.addItem(ss.unbox(ss.cast(x, ss.Int32)).toString(), ss.coalesce(Q.tryGetText('Enums.' + this.options.enumKey + '.' + name), name), null, false);
			}
		}
	}, ss.makeGenericType($Serenity_Select2Editor$2, [$Serenity_EnumEditorOptions, Object]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_EnumEditorOptions, $asm, {});
	ss.initClass($Serenity_EnumFiltering, $asm, {
		getOperators: function() {
			var $t1 = [];
			$t1.push({ key: $Serenity_FilterOperators.EQ });
			$t1.push({ key: $Serenity_FilterOperators.NE });
			return this.appendNullableOperators($t1);
		}
	}, ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_EnumEditor]), [$Serenity_IFiltering]);
	ss.initClass($Serenity_FilterableAttribute, $asm, {
		get_value: function() {
			return this.$2$ValueField;
		},
		set_value: function(value) {
			this.$2$ValueField = value;
		}
	});
	$Serenity_FilterableAttribute.$ctor1.prototype = $Serenity_FilterableAttribute.prototype;
	ss.initClass($Serenity_TemplatedDialog, $asm, {}, ss.makeGenericType($Serenity_TemplatedDialog$1, [Object]), [$Serenity_IDialog]);
	ss.initClass($Serenity_FilterDialog, $asm, {
		getTemplate: function() {
			return "<div id='~_FilterPanel'/>";
		},
		getDialogOptions: function() {
			var opt = ss.makeGenericType($Serenity_TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			opt.buttons = [{ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				this.$filterPanel.search();
				if (this.$filterPanel.get_hasErrors()) {
					Q.notifyError(Q.text('Controls.FilterPanel.FixErrorsMessage'));
					return;
				}
				this.dialogClose();
			}) }, { text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) }];
			opt.title = Q.text('Controls.FilterPanel.DialogTitle');
			return opt;
		},
		get_filterPanel: function() {
			return this.$filterPanel;
		}
	}, $Serenity_TemplatedDialog, [$Serenity_IDialog]);
	ss.initClass($Serenity_FilterDisplayBar, $asm, {
		filterStoreChanged: function() {
			ss.makeGenericType($Serenity_FilterWidgetBase$1, [Object]).prototype.filterStoreChanged.call(this);
			var displayText = Q.trimToNull(this.get_store().get_displayText());
			this.get_element().find('.current').toggle(ss.isValue(displayText));
			this.get_element().find('.reset').toggle(ss.isValue(displayText));
			var $t2 = this.get_element().find('.txt');
			var $t1 = displayText;
			if (ss.isNullOrUndefined($t1)) {
				$t1 = Q.text('Controls.FilterPanel.EffectiveEmpty');
			}
			$t2.text('[' + $t1 + ']');
		},
		getTemplate: function() {
			return "<div><a class='reset'></a><a class='edit'></a><div class='current'><span class='cap'></span><a class='txt'></a></div></div>";
		}
	}, ss.makeGenericType($Serenity_FilterWidgetBase$1, [Object]));
	ss.initClass($Serenity_FilteringTypeRegistry, $asm, {});
	ss.initClass($Serenity_FilterOperators, $asm, {});
	ss.initClass($Serenity_FilterPanel, $asm, {
		get_showInitialLine: function() {
			return this.$showInitialLine;
		},
		set_showInitialLine: function(value) {
			if (this.$showInitialLine !== value) {
				this.$showInitialLine = value;
				if (this.$showInitialLine && this.$rowsDiv.children().length === 0) {
					this.$addEmptyRow(false);
				}
			}
		},
		filterStoreChanged: function() {
			ss.makeGenericType($Serenity_FilterWidgetBase$1, [Object]).prototype.filterStoreChanged.call(this);
			this.updateRowsFromStore();
		},
		updateRowsFromStore: function() {
			this.$rowsDiv.empty();
			var $t1 = this.get_store().get_items();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				this.$addEmptyRow(false);
				var row = this.$rowsDiv.children().last();
				var divl = row.children('div.l');
				divl.children('.leftparen').toggleClass('active', !!item.leftParen);
				divl.children('.rightparen').toggleClass('active', !!item.rightParen);
				divl.children('.andor').toggleClass('or', !!item.isOr).text(Q.text((!!item.isOr ? 'Controls.FilterPanel.Or' : 'Controls.FilterPanel.And')));
				var fieldSelect = $Serenity_WX.getWidget($Serenity_$FilterPanel$FieldSelect).call(null, row.children('div.f').find('input.field-select'));
				fieldSelect.set_value(item.field);
				this.$rowFieldChange(row);
				var operatorSelect = $Serenity_WX.getWidget($Serenity_$FilterPanel$OperatorSelect).call(null, row.children('div.o').find('input.op-select'));
				operatorSelect.set_value(item.operator);
				this.$rowOperatorChange(row);
				var filtering = this.$getFilteringFor(row);
				if (ss.isValue(filtering)) {
					filtering.set_operator({ key: item.operator });
					filtering.loadState(item.state);
				}
			}
			if (this.get_showInitialLine() && this.$rowsDiv.children().length === 0) {
				this.$addEmptyRow(false);
			}
			this.$updateParens();
		},
		get_showSearchButton: function() {
			return this.$showSearchButton;
		},
		set_showSearchButton: function(value) {
			if (this.$showSearchButton !== value) {
				this.$showSearchButton = value;
				this.$updateButtons();
			}
		},
		get_updateStoreOnReset: function() {
			return this.$updateStoreOnReset;
		},
		set_updateStoreOnReset: function(value) {
			if (this.$updateStoreOnReset !== value) {
				this.$updateStoreOnReset = value;
			}
		},
		getTemplate: function() {
			return $Serenity_FilterPanel.panelTemplate;
		},
		$initButtons: function() {
			this.byId$1('AddButton').text(Q.text('Controls.FilterPanel.AddFilter')).click(ss.mkdel(this, this.$addButtonClick));
			this.byId$1('SearchButton').text(Q.text('Controls.FilterPanel.SearchButton')).click(ss.mkdel(this, this.$searchButtonClick));
			this.byId$1('ResetButton').text(Q.text('Controls.FilterPanel.ResetButton')).click(ss.mkdel(this, this.$resetButtonClick));
		},
		$searchButtonClick: function(e) {
			e.preventDefault();
			this.search();
		},
		get_hasErrors: function() {
			return this.$rowsDiv.children().children('div.v').children('span.error').length > 0;
		},
		search: function() {
			this.$rowsDiv.children().children('div.v').children('span.error').remove();
			var filterLines = [];
			var errorText = null;
			var row = null;
			for (var i = 0; i < this.$rowsDiv.children().length; i++) {
				try {
					row = this.$rowsDiv.children().eq(i);
					var filtering = this.$getFilteringFor(row);
					if (ss.isNullOrUndefined(filtering)) {
						continue;
					}
					var field = this.$getFieldFor(row);
					var op = $Serenity_WX.getWidget($Serenity_$FilterPanel$OperatorSelect).call(null, row.children('div.o').find('input.op-select')).get_value();
					if (ss.isNullOrUndefined(op) || op.length === 0) {
						throw new ss.ArgumentOutOfRangeException('operator', Q.text('Controls.FilterPanel.InvalidOperator'));
					}
					var line = {};
					line.field = field.name;
					line.operator = op;
					line.isOr = row.children('div.l').children('a.andor').hasClass('or');
					line.leftParen = row.children('div.l').children('a.leftparen').hasClass('active');
					line.rightParen = row.children('div.l').children('a.rightparen').hasClass('active');
					var displayText = {};
					filtering.set_operator({ key: op });
					line.criteria = filtering.getCriteria(displayText);
					line.state = filtering.saveState();
					line.displayText = displayText.$;
					filterLines.push(line);
				}
				catch ($t1) {
					$t1 = ss.Exception.wrap($t1);
					if (ss.isInstanceOfType($t1, ss.ArgumentException)) {
						var ex = ss.cast($t1, ss.ArgumentException);
						errorText = ex.get_message();
						break;
					}
					else {
						throw $t1;
					}
				}
			}
			// if an error occured, display it, otherwise set current filters
			if (ss.isValue(errorText)) {
				$('<span/>').addClass('error').attr('title', errorText).appendTo(row.children('div.v'));
				row.children('div.v').find('input:first').focus();
				return;
			}
			ss.clear(this.get_store().get_items());
			ss.arrayAddRange(this.get_store().get_items(), filterLines);
			this.get_store().raiseChanged();
		},
		$addButtonClick: function(e) {
			this.$addEmptyRow(true);
			e.preventDefault();
		},
		$resetButtonClick: function(e) {
			e.preventDefault();
			if (this.get_updateStoreOnReset()) {
				if (this.get_store().get_items().length > 0) {
					ss.clear(this.get_store().get_items());
					this.get_store().raiseChanged();
				}
			}
			this.$rowsDiv.empty();
			this.$updateButtons();
			if (this.get_showInitialLine()) {
				this.$addEmptyRow(false);
			}
		},
		$findEmptyRow: function() {
			var result = null;
			this.$rowsDiv.children().each(function(index, row) {
				var fieldInput = $(row).children('div.f').children('input.field-select').first();
				if (fieldInput.length === 0) {
					return true;
				}
				var val = fieldInput.val();
				if (ss.isNullOrUndefined(val) || val.length === 0) {
					result = $(row);
					return false;
				}
				return true;
			});
			return result;
		},
		$addEmptyRow: function(popupField) {
			var emptyRow = this.$findEmptyRow();
			if (ss.isValue(emptyRow)) {
				emptyRow.find('input.field-select').select2('focus');
				if (popupField) {
					emptyRow.find('input.field-select').select2('open');
				}
				return emptyRow;
			}
			var isLastRowOr = this.$rowsDiv.children().last().children('a.andor').hasClass('or');
			var row = $($Serenity_FilterPanel.rowTemplate).appendTo(this.$rowsDiv);
			var parenDiv = row.children('div.l').hide();
			parenDiv.children('a.leftparen, a.rightparen').click(ss.mkdel(this, this.$leftRightParenClick));
			var andor = parenDiv.children('a.andor').attr('title', Q.text('Controls.FilterPanel.ChangeAndOr'));
			if (isLastRowOr) {
				andor.addClass('or').text(Q.text('Controls.FilterPanel.Or'));
			}
			else {
				andor.text(Q.text('Controls.FilterPanel.And'));
			}
			andor.click(ss.mkdel(this, this.$andOrClick));
			row.children('a.delete').attr('title', Q.text('Controls.FilterPanel.RemoveField')).click(ss.mkdel(this, this.$deleteRowClick));
			var fieldSel = new $Serenity_$FilterPanel$FieldSelect(row.children('div.f').children('input'), this.get_store().get_fields());
			$Serenity_WX.changeSelect2(fieldSel, ss.mkdel(this, this.$onRowFieldChange));
			this.$updateParens();
			this.$updateButtons();
			row.find('input.field-select').select2('focus');
			if (popupField) {
				row.find('input.field-select').select2('open');
			}
			return row;
		},
		$onRowFieldChange: function(e) {
			var row = $(e.target).closest('div.filter-line');
			this.$rowFieldChange(row);
			var opSelect = row.children('div.o').find('input.op-select');
			opSelect.select2('focus');
		},
		$rowFieldChange: function(row) {
			row.removeData('Filtering');
			var select = $Serenity_WX.getWidget($Serenity_$FilterPanel$FieldSelect).call(null, row.children('div.f').find('input.field-select'));
			var fieldName = select.get_value();
			var isEmpty = ss.isNullOrUndefined(fieldName) || fieldName === '';
			this.$removeFiltering(row);
			this.$populateOperatorList(row);
			this.$rowOperatorChange(row);
			this.$updateParens();
			this.$updateButtons();
		},
		$removeFiltering: function(row) {
			row.data('Filtering', null);
			row.data('FilteringField', null);
		},
		$populateOperatorList: function(row) {
			row.children('div.o').html('');
			var filtering = this.$getFilteringFor(row);
			if (ss.isNullOrUndefined(filtering)) {
				return;
			}
			var hidden = row.children('div.o').html('<input/>').children().attr('type', 'hidden').addClass('op-select');
			var operators = filtering.getOperators();
			$Serenity_WX.changeSelect2(new $Serenity_$FilterPanel$OperatorSelect(hidden, operators), ss.mkdel(this, this.$onRowOperatorChange));
		},
		$getFieldFor: function(row) {
			if (row.length === 0) {
				return null;
			}
			var select = $Serenity_WX.getWidget($Serenity_$FilterPanel$FieldSelect).call(null, row.children('div.f').find('input.field-select'));
			if (Q.isEmptyOrNull(select.get_value())) {
				return null;
			}
			return this.get_store().get_fieldByName()[select.get_value()];
		},
		$getFilteringFor: function(row) {
			var field = this.$getFieldFor(row);
			if (ss.isNullOrUndefined(field)) {
				return null;
			}
			var filtering = ss.cast(row.data('Filtering'), $Serenity_IFiltering);
			if (ss.isValue(filtering)) {
				return filtering;
			}
			var filteringType = $Serenity_FilteringTypeRegistry.get(ss.coalesce(field.filteringType, 'String'));
			var editorDiv = row.children('div.v');
			filtering = ss.cast(ss.createInstance(filteringType), $Serenity_IFiltering);
			$Serenity_ReflectionOptionsSetter.set(filtering, field.filteringParams);
			filtering.set_container(editorDiv);
			filtering.set_field(field);
			row.data('Filtering', filtering);
			return filtering;
		},
		$onRowOperatorChange: function(e) {
			var row = $(e.target).closest('div.filter-line');
			this.$rowOperatorChange(row);
			var firstInput = row.children('div.v').find(':input:visible').first();
			try {
				firstInput.focus();
			}
			catch ($t1) {
			}
			;
		},
		$rowOperatorChange: function(row) {
			if (row.length === 0) {
				return;
			}
			var editorDiv = row.children('div.v');
			editorDiv.html('');
			var filtering = this.$getFilteringFor(row);
			if (ss.isNullOrUndefined(filtering)) {
				return;
			}
			var operatorSelect = $Serenity_WX.getWidget($Serenity_$FilterPanel$OperatorSelect).call(null, row.children('div.o').find('input.op-select'));
			if (Q.isEmptyOrNull(operatorSelect.get_value())) {
				return;
			}
			var op = Enumerable.from(filtering.getOperators()).firstOrDefault(function(x) {
				return ss.referenceEquals(x.key, operatorSelect.get_value());
			}, ss.getDefaultValue(Object));
			if (ss.isNullOrUndefined(op)) {
				return;
			}
			filtering.set_operator(op);
			filtering.createEditor();
		},
		$deleteRowClick: function(e) {
			e.preventDefault();
			var row = $(e.target).closest('div.filter-line');
			row.remove();
			if (this.$rowsDiv.children().length === 0) {
				this.search();
			}
			this.$updateParens();
			this.$updateButtons();
		},
		$updateButtons: function() {
			this.byId$1('SearchButton').toggle(this.$rowsDiv.children().length >= 1 && this.$showSearchButton);
			this.byId$1('ResetButton').toggle(this.$rowsDiv.children().length >= 1);
		},
		$andOrClick: function(e) {
			e.preventDefault();
			var andor = $(e.target).toggleClass('or');
			andor.text(Q.text('Controls.FilterPanel.' + (andor.hasClass('or') ? 'Or' : 'And')));
		},
		$leftRightParenClick: function(e) {
			e.preventDefault();
			$(e.target).toggleClass('active');
			this.$updateParens();
		},
		$updateParens: function() {
			var rows = this.$rowsDiv.children();
			if (rows.length === 0) {
				return;
			}
			rows.removeClass('paren-start');
			rows.removeClass('paren-end');
			rows.children('div.l').css('display', ((rows.length === 1) ? 'none' : 'block'));
			rows.first().children('div.l').children('a.rightparen, a.andor').css('visibility', 'hidden');
			for (var i = 1; i < rows.length; i++) {
				var row = rows.eq(i);
				row.children('div.l').css('display', 'block').children('a.lefparen, a.andor').css('visibility', 'visible');
			}
			var inParen = false;
			for (var i1 = 0; i1 < rows.length; i1++) {
				var row1 = rows.eq(i1);
				var divParen = row1.children('div.l');
				var lp = divParen.children('a.leftparen');
				var rp = divParen.children('a.rightparen');
				if (rp.hasClass('active') && inParen) {
					inParen = false;
					if (i1 > 0) {
						rows.eq(i1 - 1).addClass('paren-end');
					}
				}
				if (lp.hasClass('active')) {
					inParen = true;
					if (i1 > 0) {
						row1.addClass('paren-start');
					}
				}
			}
		}
	}, ss.makeGenericType($Serenity_FilterWidgetBase$1, [Object]));
	ss.initClass($Serenity_FilterPanelTest, $asm, {
		run: function() {
			var fields = Q.getColumns('Northwind.Product');
			var dialog = new $Serenity_FilterDialog();
			var panel = dialog.get_filterPanel();
			panel.set_showInitialLine(true);
			var store = new $Serenity_FilterStore(Enumerable.from(fields).where(function(x) {
				return x.notFilterable !== true;
			}));
			panel.set_showSearchButton(true);
			panel.set_store(store);
			dialog.dialogOpen();
		}
	}, Serenity.ScriptContext);
	ss.initClass($Serenity_FilterStore, $asm, {
		get_fields: function() {
			return this.$1$FieldsField;
		},
		set_fields: function(value) {
			this.$1$FieldsField = value;
		},
		get_fieldByName: function() {
			return this.$1$FieldByNameField;
		},
		set_fieldByName: function(value) {
			this.$1$FieldByNameField = value;
		},
		get_items: function() {
			return this.$1$ItemsField;
		},
		set_items: function(value) {
			this.$1$ItemsField = value;
		},
		raiseChanged: function() {
			this.$displayText = null;
			if (!ss.staticEquals(this.$changed, null)) {
				this.$changed(this, ss.EventArgs.Empty);
			}
		},
		add_changed: function(value) {
			this.$changed = ss.delegateCombine(this.$changed, value);
		},
		remove_changed: function(value) {
			this.$changed = ss.delegateRemove(this.$changed, value);
		},
		get_activeCriteria: function() {
			var inParens = false;
			var currentBlock = [''];
			var isBlockOr = false;
			var activeCriteria = [''];
			for (var i = 0; i < this.get_items().length; i++) {
				var line = this.get_items()[i];
				if (inParens && (line.rightParen || line.leftParen)) {
					if (!Serenity.Criteria.isEmpty(currentBlock)) {
						if (isBlockOr) {
							activeCriteria = Serenity.Criteria.join(activeCriteria, 'or', currentBlock);
						}
						else {
							activeCriteria = Serenity.Criteria.join(activeCriteria, 'and', currentBlock);
						}
						currentBlock = [''];
					}
					inParens = false;
				}
				if (line.leftParen) {
					isBlockOr = line.isOr;
					inParens = true;
				}
				if (line.isOr) {
					currentBlock = Serenity.Criteria.join(currentBlock, 'or', line.criteria);
				}
				else {
					currentBlock = Serenity.Criteria.join(currentBlock, 'and', line.criteria);
				}
			}
			if (!Serenity.Criteria.isEmpty(currentBlock)) {
				if (isBlockOr) {
					activeCriteria = Serenity.Criteria.join(activeCriteria, 'or', currentBlock);
				}
				else {
					activeCriteria = Serenity.Criteria.join(activeCriteria, 'and', currentBlock);
				}
			}
			return activeCriteria;
		},
		get_displayText: function() {
			if (ss.isNullOrUndefined(this.$displayText)) {
				var inParens = false;
				this.$displayText = '';
				for (var i = 0; i < this.get_items().length; i++) {
					var line = this.get_items()[i];
					if (inParens && (line.rightParen || line.leftParen)) {
						this.$displayText += ')';
						inParens = false;
					}
					if (this.$displayText.length > 0) {
						this.$displayText += ' ' + Q.text('Controls.FilterPanel.' + (line.isOr ? 'Or' : 'And')) + ' ';
					}
					if (line.leftParen) {
						this.$displayText += '(';
						inParens = true;
					}
					this.$displayText += line.displayText;
				}
			}
			return this.$displayText;
		}
	});
	ss.initClass($Serenity_Flexify, $asm, {
		$storeInitialSize: function() {
			if (!!this.element.data('flexify-init')) {
				return;
			}
			var $t2 = this.element;
			var $t1 = this.options.designWidth;
			if (ss.isNullOrUndefined($t1)) {
				$t1 = this.element.width();
			}
			$t2.data('flexify-width', $t1);
			var $t4 = this.element;
			var $t3 = this.options.designHeight;
			if (ss.isNullOrUndefined($t3)) {
				$t3 = this.element.height();
			}
			$t4.data('flexify-height', $t3);
			this.element.data('flexify-init', true);
			var self = this;
			this.element.bind('resize.' + this.uniqueName, function(e, ui) {
				self.$resizeElements();
			});
			this.element.bind('resizestop.' + this.uniqueName, function(e1, ui1) {
				self.$resizeElements();
			});
			var tabs = this.element.find('.ui-tabs');
			if (tabs.length > 0) {
				tabs.bind('tabsactivate.' + this.uniqueName, function() {
					self.$resizeElements();
				});
			}
			if (ss.isValue(this.options.designWidth) || ss.isValue(this.options.designHeight)) {
				self.$resizeElements();
			}
		},
		$getXFactor: function(element) {
			var xFactor = null;
			if (!ss.staticEquals(this.options.getXFactor, null)) {
				xFactor = this.options.getXFactor(element);
			}
			if (ss.isNullOrUndefined(xFactor)) {
				xFactor = element.data('flex-x');
			}
			return ss.coalesce(xFactor, 1);
		},
		$getYFactor: function(element) {
			var yFactor = null;
			if (!ss.staticEquals(this.options.getYFactor, null)) {
				yFactor = this.options.getYFactor(element);
			}
			if (ss.isNullOrUndefined(yFactor)) {
				yFactor = element.data('flex-y');
			}
			return ss.coalesce(yFactor, 0);
		},
		$resizeElements: function() {
			var width = this.element.width();
			var initialWidth = this.element.data('flexify-width');
			if (ss.isNullOrUndefined(initialWidth)) {
				this.element.data('flexify-width', width);
				initialWidth = width;
			}
			var height = this.element.height();
			var initialHeight = this.element.data('flexify-height');
			if (ss.isNullOrUndefined(initialHeight)) {
				this.element.data('flexify-height', height);
				initialHeight = height;
			}
			this.$xDifference = width - ss.unbox(initialWidth);
			this.$yDifference = height - ss.unbox(initialHeight);
			var self = this;
			var containers = this.element;
			var tabPanels = this.element.find('.ui-tabs-panel');
			if (tabPanels.length > 0) {
				containers = tabPanels.filter(':visible');
			}
			containers.find('.flexify').add(tabPanels.filter('.flexify:visible')).each(function(i, e) {
				self.$resizeElement($(e));
			});
		},
		$resizeElement: function(element) {
			var xFactor = this.$getXFactor(element);
			if (xFactor !== 0) {
				var initialWidth = element.data('flexify-width');
				if (ss.isNullOrUndefined(initialWidth)) {
					var width = element.width();
					element.data('flexify-width', width);
					initialWidth = width;
				}
				element.width(ss.unbox(initialWidth) + xFactor * this.$xDifference | 0);
			}
			var yFactor = this.$getYFactor(element);
			if (yFactor !== 0) {
				var initialHeight = element.data('flexify-height');
				if (ss.isNullOrUndefined(initialHeight)) {
					var height = element.height();
					element.data('flexify-height', height);
					initialHeight = height;
				}
				element.height(ss.unbox(initialHeight) + yFactor * this.$yDifference | 0);
			}
			if (element.hasClass('require-layout')) {
				element.triggerHandler('layout');
			}
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]));
	ss.initClass($Serenity_FLX, $asm, {});
	ss.initClass($Serenity_FormatterTypeRegistry, $asm, {});
	ss.initClass($Serenity_GridSelectAllButtonHelper, $asm, {});
	ss.initClass($Serenity_GridUtils, $asm, {});
	ss.initClass($Serenity_HtmlContentEditor, $asm, {
		instanceReady: function(x) {
			this.$instanceReady = true;
			$(x.editor.container.$).addClass(this.element.attr('class'));
			this.element.addClass('select2-offscreen').css('display', 'block');
			// validasyonun çalışması için
			x.editor.setData(this.element.val());
		},
		getConfig: function() {
			var self = this;
			return { customConfig: '', language: 'tr', bodyClass: 's-HtmlContentBody', on: {
				instanceReady: function(x) {
					self.instanceReady(x);
				},
				change: function(x1) {
					x1.editor.updateElement();
					self.get_element().triggerHandler('change');
				}
			}, toolbarGroups: [{ name: 'clipboard', groups: ['clipboard', 'undo'] }, { name: 'editing', groups: ['find', 'selection', 'spellchecker'] }, { name: 'insert', groups: ['links', 'insert', 'blocks', 'bidi', 'list', 'indent'] }, { name: 'forms', groups: ['forms', 'mode', 'document', 'doctools', 'others', 'about', 'tools'] }, { name: 'colors' }, { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] }, { name: 'align' }, { name: 'styles' }], removeButtons: 'SpecialChar,Anchor,Subscript,Styles', format_tags: 'p;h1;h2;h3;pre', removeDialogTabs: 'image:advanced;link:advanced', contentsCss: Q.resolveUrl('~/content/site/site.htmlcontent.css'), entities: false, entities_latin: false, entities_greek: false, autoUpdateElement: true, height: ((ss.isNullOrUndefined(this.options.rows) || this.options.rows === 0) ? null : (ss.Nullable$1.mul(this.options.rows, 20) + 'px')) };
		},
		$getEditorInstance: function() {
			var id = this.element.attr('id');
			return CKEDITOR.instances[id];
		},
		destroy: function() {
			var instance = this.$getEditorInstance();
			if (ss.isValue(instance)) {
				instance.destroy();
			}
			$Serenity_Widget.prototype.destroy.call(this);
		},
		get_value: function() {
			var instance = this.$getEditorInstance();
			if (this.$instanceReady && ss.isValue(instance)) {
				return instance.getData();
			}
			else {
				return this.element.val();
			}
		},
		set_value: function(value) {
			var instance = this.$getEditorInstance();
			if (this.$instanceReady && ss.isValue(instance)) {
				instance.setData(value);
			}
			else {
				this.element.val(value);
			}
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_HtmlContentEditorOptions]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_HtmlContentEditorOptions, $asm, {});
	ss.initClass($Serenity_HtmlReportContentEditor, $asm, {
		getConfig: function() {
			var config = $Serenity_HtmlContentEditor.prototype.getConfig.call(this);
			config.removeButtons += ',Image,Table,HorizontalRule,Anchor,Blockquote,CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Superscript';
			return config;
		}
	}, $Serenity_HtmlContentEditor, [$Serenity_IStringValue]);
	ss.initClass($Serenity_ImageUploadEditor, $asm, {
		addFileButtonText: function() {
			return Q.text('Controls.ImageUpload.AddFileButton');
		},
		getToolButtons: function() {
			var self = this;
			var $t1 = [];
			$t1.push({
				title: this.addFileButtonText(),
				cssClass: 'add-file-button',
				onClick: function() {
				}
			});
			$t1.push({
				title: '',
				hint: Q.text('Controls.ImageUpload.DeleteButtonHint'),
				cssClass: 'delete-button',
				onClick: function() {
					self.entity = null;
					self.populate();
					self.updateInterface();
				}
			});
			return $t1;
		},
		populate: function() {
			var displayOriginalName = !Q.isTrimmedEmpty(this.options.originalNameProperty);
			if (ss.isNullOrUndefined(this.entity)) {
				$Serenity_UploadHelper.populateFileSymbols(this.fileSymbols, null, displayOriginalName, this.options.urlPrefix);
			}
			else {
				var $t2 = this.fileSymbols;
				var $t1 = [];
				$t1.push(this.entity);
				$Serenity_UploadHelper.populateFileSymbols($t2, $t1, displayOriginalName, this.options.urlPrefix);
			}
		},
		updateInterface: function() {
			var addButton = this.toolbar.findButton('add-file-button');
			var delButton = this.toolbar.findButton('delete-button');
			addButton.toggleClass('disabled', this.get_readOnly());
			delButton.toggleClass('disabled', this.get_readOnly() || ss.isNullOrUndefined(this.entity));
		},
		get_readOnly: function() {
			return !ss.isNullOrUndefined(this.uploadInput.attr('disabled'));
		},
		set_readOnly: function(value) {
			if (this.get_readOnly() !== value) {
				if (value) {
					this.uploadInput.attr('disabled', 'disabled');
				}
				else {
					this.uploadInput.removeAttr('disabled');
				}
				this.updateInterface();
			}
		},
		get_value: function() {
			if (ss.isNullOrUndefined(this.entity)) {
				return null;
			}
			var copy = $.extend({}, this.entity);
			return copy;
		},
		set_value: function(value) {
			if (ss.isValue(value)) {
				if (ss.isNullOrUndefined(value.Filename)) {
					this.entity = null;
				}
				else {
					this.entity = $.extend({}, value);
				}
			}
			else {
				this.entity = null;
			}
			this.populate();
			this.updateInterface();
		},
		getEditValue: function(property, target) {
			target[property.name] = (ss.isNullOrUndefined(this.entity) ? null : Q.trimToNull(this.entity.Filename));
		},
		setEditValue: function(source, property) {
			var value = {};
			value.Filename = ss.cast(source[property.name], String);
			value.OriginalName = ss.cast(source[this.options.originalNameProperty], String);
			this.set_value(value);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_ImageUploadEditorOptions]), [$Serenity_IGetEditValue, $Serenity_ISetEditValue, $Serenity_IReadOnly]);
	ss.initClass($Serenity_ImageUploadEditorOptions, $asm, {});
	ss.initClass($Serenity_IntegerEditor, $asm, {
		get_value$1: function() {
			var val = this.element.autoNumeric('get');
			if (!!Q.isTrimmedEmpty(ss.cast(val, String))) {
				return null;
			}
			else {
				return ss.cast(parseInt(ss.cast(val, String), 10), ss.Int32);
			}
		},
		set_value$1: function(value) {
			if (ss.isNullOrUndefined(value) || value === '') {
				this.element.val('');
			}
			else {
				this.element.autoNumeric('set', value);
			}
		},
		get_value: function() {
			return this.get_value$1();
		},
		set_value: function(value) {
			this.set_value$1(ss.Int32.trunc(value));
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_IntegerEditorOptions]), [$Serenity_IDoubleValue]);
	ss.initClass($Serenity_IntegerEditorOptions, $asm, {});
	ss.initClass($Serenity_IntegerFiltering, $asm, {
		getOperators: function() {
			return this.appendNullableOperators(this.appendComparisonOperators([]));
		}
	}, ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_IntegerEditor]), [$Serenity_IFiltering]);
	ss.initInterface($Serenity_IValidateRequired, $asm, { get_required: null, set_required: null });
	ss.initClass($Serenity_JsRender, $asm, {});
	ss.initClass($Serenity_LookupEditor, $asm, {
		getLookupKey: function() {
			var $t1 = this.options.lookupKey;
			if (ss.isNullOrUndefined($t1)) {
				$t1 = ss.makeGenericType($Serenity_LookupEditorBase$2, [$Serenity_LookupEditorOptions, Object]).prototype.getLookupKey.call(this);
			}
			return $t1;
		},
		getSelect2Options: function() {
			var opt = ss.makeGenericType($Serenity_Select2Editor$2, [$Serenity_LookupEditorOptions, Object]).prototype.getSelect2Options.call(this);
			if (ss.isValue(this.options.minimumResultsForSearch)) {
				opt.minimumResultsForSearch = ss.unbox(this.options.minimumResultsForSearch);
			}
			return opt;
		}
	}, ss.makeGenericType($Serenity_LookupEditorBase$2, [$Serenity_LookupEditorOptions, Object]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_LookupEditorOptions, $asm, {});
	ss.initClass($Serenity_LookupFiltering, $asm, {
		getOperators: function() {
			var $t1 = [];
			$t1.push({ key: $Serenity_FilterOperators.EQ });
			$t1.push({ key: $Serenity_FilterOperators.NE });
			$t1.push({ key: $Serenity_FilterOperators.contains });
			$t1.push({ key: $Serenity_FilterOperators.startsWith });
			return this.appendNullableOperators($t1);
		},
		useEditor: function() {
			return ss.referenceEquals(this.get_operator().key, $Serenity_FilterOperators.EQ) || ss.referenceEquals(this.get_operator().key, $Serenity_FilterOperators.NE);
		},
		useIdField: function() {
			return this.useEditor();
		},
		getEditorText: function() {
			if (this.useEditor()) {
				return this.editor.get_text();
			}
			return $Serenity_BaseFiltering.prototype.getEditorText.call(this);
		}
	}, ss.makeGenericType($Serenity_BaseEditorFiltering$1, [$Serenity_LookupEditor]), [$Serenity_IFiltering]);
	ss.initClass($Serenity_MaskedEditor, $asm, {
		get_value: function() {
			this.element.triggerHandler('blur.mask');
			return this.element.val();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_MaskedEditorOptions]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_MaskedEditorOptions, $asm, {});
	ss.initClass($Serenity_MultipleImageUploadEditor, $asm, {
		addFileButtonText: function() {
			return Q.text('Controls.ImageUpload.AddFileButton');
		},
		getToolButtons: function() {
			var self = this;
			var $t1 = [];
			$t1.push({
				title: this.addFileButtonText(),
				cssClass: 'add-file-button',
				onClick: function() {
				}
			});
			return $t1;
		},
		populate: function() {
			$Serenity_UploadHelper.populateFileSymbols(this.fileSymbols, this.entities, true, this.options.urlPrefix);
			this.fileSymbols.children().each(ss.mkdel(this, function(i, e) {
				var x = i;
				$("<a class='delete'></a>").appendTo($(e).children('.filename')).click(ss.mkdel(this, function(ev) {
					ev.preventDefault();
					ss.removeAt(this.entities, x);
					this.populate();
				}));
			}));
		},
		updateInterface: function() {
			var addButton = this.toolbar.findButton('add-file-button');
			addButton.toggleClass('disabled', this.get_readOnly());
		},
		get_readOnly: function() {
			return !ss.isNullOrUndefined(this.uploadInput.attr('disabled'));
		},
		set_readOnly: function(value) {
			if (this.get_readOnly() !== value) {
				if (value) {
					this.uploadInput.attr('disabled', 'disabled');
				}
				else {
					this.uploadInput.removeAttr('disabled');
				}
				this.updateInterface();
			}
		},
		get_value: function() {
			return Enumerable.from(this.entities).select(function(x) {
				return $.extend({}, x);
			}).toArray();
		},
		set_value: function(value) {
			this.entities = Enumerable.from(value || []).select(function(x) {
				return $.extend({}, x);
			}).toArray();
			this.populate();
			this.updateInterface();
		},
		getEditValue: function(property, target) {
			if (this.get_jsonEncodeValue()) {
				target[property.name] = $.toJSON(this.get_value());
			}
			else {
				target[property.name] = this.get_value();
			}
		},
		setEditValue: function(source, property) {
			var val = source[property.name];
			if (ss.isInstanceOfType(val, String)) {
				var json = ss.coalesce(Q.trimToNull(ss.safeCast(source[property.name], String)), '[]');
				if (ss.startsWithString(json, '[') && ss.endsWithString(json, ']')) {
					this.set_value($.parseJSON(json));
				}
				else {
					var $t1 = [];
					$t1.push({ Filename: json, OriginalName: 'UnknownFile' });
					this.set_value($t1);
				}
			}
			else {
				this.set_value(ss.cast(val, Array));
			}
		},
		get_jsonEncodeValue: function() {
			return this.$4$JsonEncodeValueField;
		},
		set_jsonEncodeValue: function(value) {
			this.$4$JsonEncodeValueField = value;
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_ImageUploadEditorOptions]), [$Serenity_IGetEditValue, $Serenity_ISetEditValue, $Serenity_IReadOnly]);
	ss.initClass($Serenity_StringEditor, $asm, {
		get_value: function() {
			return this.element.val();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_PasswordEditor, $asm, {}, $Serenity_StringEditor, [$Serenity_IStringValue]);
	ss.initClass($Serenity_PersonNameEditor, $asm, {
		get_value: function() {
			return this.element.val();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_PhoneEditor, $asm, {
		validate: function(value) {
			return $Serenity_PhoneEditor.$validate(value, this.options.multiple, this.options.internal, this.options.mobile, this.options.allowInternational, this.options.allowExtension);
		},
		formatValue: function() {
			this.element.val(this.getFormattedValue());
		},
		getFormattedValue: function() {
			var value = this.element.val();
			var formatter = null;
			var myFormatter = ss.mkdel(this, function(s) {
				if (ss.isNullOrEmptyString(s) || this.options.internal) {
					return formatter(s);
				}
				s = ss.coalesce(s, '').trim();
				if (ss.startsWithString(s, '+')) {
					return s;
				}
				if (s.indexOf(String.fromCharCode(47)) > 0) {
					var p = ss.netSplit(s, [47].map(function(i) {
						return String.fromCharCode(i);
					}));
					if (p.length !== 2) {
						return s;
					}
					if (p[0].length < 5) {
						return s;
					}
					var x = {};
					if (!ss.Int32.tryParse(p[1], x)) {
						return s;
					}
					return p[0] + ' / ' + x.$.toString();
				}
				return formatter(s);
			});
			if (!this.options.internal && !this.options.mobile) {
				formatter = $Serenity_PhoneEditor.$formatPhoneTurkey;
			}
			else if (this.options.mobile) {
				formatter = $Serenity_PhoneEditor.$formatMobileTurkey;
			}
			else if (this.options.internal) {
				formatter = $Serenity_PhoneEditor.$formatPhoneInternal;
			}
			if (!ss.staticEquals(formatter, null)) {
				if (this.options.multiple) {
					return $Serenity_PhoneEditor.$formatMulti(value, myFormatter);
				}
				else {
					return myFormatter(value);
				}
			}
			return value;
		},
		get_value: function() {
			return this.getFormattedValue();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_PhoneEditorOptions]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_PhoneEditorOptions, $asm, {});
	ss.initClass($Serenity_PopupMenuButton, $asm, {
		destroy: function() {
			if (ss.isValue(this.options.menu)) {
				this.options.menu.remove();
			}
			$Serenity_Widget.prototype.destroy.call(this);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]));
	ss.initClass($Serenity_PopupToolButton, $asm, {}, $Serenity_PopupMenuButton);
	ss.initClass($Serenity_PrefixedContext, $asm, {
		byId$1: function(id) {
			return $('#' + this.$idPrefix + id);
		},
		byId: function(TWidget) {
			return function(id) {
				return $Serenity_WX.getWidget(TWidget).call(null, this.byId$1(id));
			};
		},
		get_idPrefix: function() {
			return this.$idPrefix;
		}
	}, Serenity.ScriptContext);
	ss.initClass($Serenity_PropertyItemHelper, $asm, {});
	ss.initClass($Serenity_PropertyEditorHelper, $asm, {}, $Serenity_PropertyItemHelper);
	ss.initClass($Serenity_PropertyGrid, $asm, {
		destroy: function() {
			if (ss.isValue(this.$editors)) {
				for (var i = 0; i < this.$editors.length; i++) {
					this.$editors[i].destroy();
				}
				this.$editors = null;
			}
			this.element.find('a.category-link').unbind('click', $Serenity_PropertyGrid.$categoryLinkClick).remove();
			$Serenity_Widget.prototype.destroy.call(this);
		},
		$createCategoryDiv: function(categoriesDiv, categoryIndexes, category) {
			var categoryDiv = $('<div/>').addClass('category').appendTo(categoriesDiv);
			$('<div/>').addClass('category-title').append($('<a/>').addClass('category-anchor').text(this.$determineText(category, function(prefix) {
				return prefix + 'Categories.' + category;
			})).attr('name', this.options.idPrefix + 'Category' + categoryIndexes[category].toString())).appendTo(categoryDiv);
			return categoryDiv;
		},
		$determineText: function(text, getKey) {
			if (ss.isValue(text) && !ss.startsWithString(text, '`')) {
				var local = Q.tryGetText(text);
				if (ss.isValue(local)) {
					return local;
				}
			}
			if (ss.isValue(text) && ss.startsWithString(text, '`')) {
				text = text.substr(1);
			}
			if (!Q.isEmptyOrNull(this.options.localTextPrefix)) {
				var local1 = Q.tryGetText(getKey(this.options.localTextPrefix));
				if (ss.isValue(local1)) {
					return local1;
				}
			}
			return text;
		},
		$createField: function(container, item) {
			var fieldDiv = $('<div/>').addClass('field').addClass(item.name).data('PropertyItem', item).appendTo(container);
			if (!ss.isNullOrEmptyString(item.cssClass)) {
				fieldDiv.addClass(item.cssClass);
			}
			var editorId = this.options.idPrefix + item.name;
			var title = this.$determineText(item.title, function(prefix) {
				return prefix + item.name;
			});
			var hint = this.$determineText(item.hint, function(prefix1) {
				return prefix1 + item.name + '_Hint';
			});
			var placeHolder = this.$determineText(item.placeholder, function(prefix2) {
				return prefix2 + item.name + '_Placeholder';
			});
			var $t2 = $('<label/>').addClass('caption').attr('for', editorId);
			var $t1 = hint;
			if (ss.isNullOrUndefined($t1)) {
				$t1 = ss.coalesce(title, '');
			}
			var label = $t2.attr('title', $t1).html(ss.coalesce(title, '')).appendTo(fieldDiv);
			if (item.required) {
				$('<sup>*</sup>').attr('title', Texts$Controls$PropertyGrid.RequiredHint.get()).prependTo(label);
			}
			var editorType = $Serenity_EditorTypeRegistry.get(item.editorType);
			var elementAttr = ss.getAttributes(editorType, Serenity.ElementAttribute, true);
			var elementHtml = ((elementAttr.length > 0) ? elementAttr[0].get_html() : '<input/>');
			var element = $Serenity_Widget.elementFor$1(editorType).addClass('editor').addClass('flexify').attr('id', editorId).appendTo(fieldDiv);
			if (element.is(':input')) {
				element.attr('name', ss.coalesce(item.name, ''));
			}
			if (!Q.isEmptyOrNull(placeHolder)) {
				element.attr('placeholder', placeHolder);
			}
			var editorParams = item.editorParams;
			var optionsType = null;
			var optionsAttr = ss.getAttributes(editorType, Serenity.OptionsTypeAttribute, true);
			if (ss.isValue(optionsAttr) && optionsAttr.length > 0) {
				optionsType = optionsAttr[0].get_optionsType();
			}
			var editor;
			if (ss.isValue(optionsType)) {
				editorParams = $.extend(ss.createInstance(optionsType), item.editorParams);
				editor = ss.cast(new editorType(element, editorParams), $Serenity_Widget);
			}
			else {
				editorParams = $.extend(new Object(), item.editorParams);
				editor = ss.cast(new editorType(element, editorParams), $Serenity_Widget);
			}
			editor.initialize();
			if (ss.isInstanceOfType(editor, $Serenity_BooleanEditor)) {
				label.removeAttr('for');
			}
			if (ss.isValue(item.maxLength)) {
				$Serenity_PropertyGrid.$setMaxLength(editor, ss.unbox(item.maxLength));
			}
			if (ss.isValue(item.editorParams)) {
				$Serenity_ReflectionOptionsSetter.set(editor, item.editorParams);
			}
			$('<div/>').addClass('vx').appendTo(fieldDiv);
			$('<div/>').addClass('clear').appendTo(fieldDiv);
			return editor;
		},
		$getCategoryOrder: function(items) {
			var order = 0;
			var result = {};
			var categoryOrder = Q.trimToNull(this.options.categoryOrder);
			if (ss.isValue(categoryOrder)) {
				var split = categoryOrder.split(';');
				for (var $t1 = 0; $t1 < split.length; $t1++) {
					var s = split[$t1];
					var x = Q.trimToNull(s);
					if (ss.isNullOrUndefined(x)) {
						continue;
					}
					if (ss.isValue(result[x])) {
						continue;
					}
					result[x] = order++;
				}
			}
			for (var $t2 = 0; $t2 < items.length; $t2++) {
				var x1 = items[$t2];
				if (ss.isNullOrUndefined(result[x1.category])) {
					result[x1.category] = order++;
				}
			}
			return result;
		},
		$createCategoryLinks: function(container, items) {
			var idx = 0;
			var itemIndex = {};
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var x = items[$t1];
				var $t2 = x.category;
				if (ss.isNullOrUndefined($t2)) {
					$t2 = ss.coalesce(this.options.defaultCategory, '');
				}
				x.category = $t2;
				itemIndex[x.name] = idx++;
			}
			var self = this;
			var categoryOrder = this.$getCategoryOrder(items);
			items.sort(function(x1, y) {
				var c = 0;
				if (!ss.referenceEquals(x1.category, y.category)) {
					var c1 = categoryOrder[x1.category];
					var c2 = categoryOrder[y.category];
					if (ss.isValue(c1) && ss.isValue(c2)) {
						c = ss.unbox(c1) - ss.unbox(c2);
					}
					else if (ss.isValue(c1)) {
						c = -1;
					}
					else if (ss.isValue(c2)) {
						c = 1;
					}
				}
				if (c === 0) {
					c = ss.compareStrings(x1.category, y.category);
				}
				if (c === 0) {
					c = ss.compare(itemIndex[x1.name], itemIndex[y.name]);
				}
				return c;
			});
			var categoryIndexes = {};
			for (var i = 0; i < items.length; i++) {
				var item = { $: items[i] };
				if (!ss.keyExists(categoryIndexes, item.$.category)) {
					var index = ss.getKeyCount(categoryIndexes) + 1;
					categoryIndexes[item.$.category] = index;
					if (index > 1) {
						$('<span/>').addClass('separator').text('|').prependTo(container);
					}
					$('<a/>').addClass('category-link').text(this.$determineText(item.$.category, ss.mkdel({ item: item }, function(prefix) {
						return prefix + 'Categories.' + this.item.$.category;
					}))).attr('tabindex', '-1').attr('href', '#' + this.options.idPrefix + 'Category' + index.toString()).click($Serenity_PropertyGrid.$categoryLinkClick).prependTo(container);
				}
			}
			$('<div/>').addClass('clear').appendTo(container);
			return categoryIndexes;
		},
		get_editors: function() {
			return this.$editors;
		},
		get_items: function() {
			return this.$items;
		},
		get_idPrefix: function() {
			return this.options.idPrefix;
		},
		get_mode: function() {
			return this.options.mode;
		},
		set_mode: function(value) {
			if (this.options.mode !== value) {
				this.options.mode = value;
				this.$updateReadOnly();
			}
		},
		load: function(source) {
			for (var i = 0; i < this.$editors.length; i++) {
				var item = this.$items[i];
				var editor = this.$editors[i];
				if (!!(this.get_mode() === 0 && !ss.isNullOrUndefined(item.defaultValue) && typeof(source[item.name]) === 'undefined')) {
					source[item.name] = item.defaultValue;
				}
				$Serenity_PropertyGrid.loadEditorValue(editor, item, source);
			}
		},
		save: function(target) {
			for (var i = 0; i < this.$editors.length; i++) {
				var item = this.$items[i];
				if (!item.oneWay && !(this.get_mode() === 0 && item.insertable === false) && !(this.get_mode() === 1 && item.updatable === false)) {
					var editor = this.$editors[i];
					$Serenity_PropertyGrid.saveEditorValue(editor, item, target);
				}
			}
		},
		$updateReadOnly: function() {
			for (var i = 0; i < this.$editors.length; i++) {
				var item = this.$items[i];
				var editor = this.$editors[i];
				var readOnly = item.readOnly || this.get_mode() === 0 && item.insertable === false || this.get_mode() === 1 && item.updatable === false;
				$Serenity_PropertyGrid.setReadOnly(editor, readOnly);
				$Serenity_PropertyGrid.setRequired(editor, !readOnly && item.required && item.editorType !== 'Boolean');
			}
		},
		enumerateItems: function(callback) {
			for (var i = 0; i < this.$editors.length; i++) {
				var item = this.$items[i];
				var editor = this.$editors[i];
				callback(item, editor);
			}
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_PropertyGridOptions]));
	ss.initEnum($Serenity_PropertyGridMode, $asm, { insert: 0, update: 1 });
	ss.initClass($Serenity_PropertyGridOptions, $asm, {});
	ss.initClass($Serenity_PropertyItemSlickConverter, $asm, {});
	ss.initClass($Serenity_PublicEditorTypes, $asm, {});
	ss.initClass($Serenity_QuickSearchInput, $asm, {
		$updateInputPlaceHolder: function() {
			var qsf = this.element.prevAll('.quick-search-field');
			if (ss.isValue(this.$field)) {
				qsf.text(this.$field.title);
			}
			else {
				qsf.text('');
			}
		},
		checkIfValueChanged: function() {
			var value = Q.trim(ss.coalesce(this.element.val(), ''));
			if (ss.referenceEquals(value, this.$lastValue) && (!this.$fieldChanged || Q.isEmptyOrNull(value))) {
				this.$fieldChanged = false;
				return;
			}
			this.$fieldChanged = false;
			this.element.parent().toggleClass(ss.coalesce(this.options.filteredParentClass, ''), !!(value.length > 0));
			this.element.addClass(ss.coalesce(this.options.loadingParentClass, ''));
			if (!!this.$timer) {
				window.clearTimeout(this.$timer);
			}
			var self = this;
			this.$timer = window.setTimeout(function() {
				self.$searchNow(value);
			}, this.options.typeDelay);
			this.$lastValue = value;
		},
		$searchNow: function(value) {
			if (!ss.staticEquals(this.options.onSearch, null)) {
				this.options.onSearch(((ss.isValue(this.$field) && !Q.isEmptyOrNull(this.$field.name)) ? this.$field.name : null), value);
			}
			this.element.removeClass(ss.coalesce(this.options.loadingParentClass, ''));
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_QuickSearchInputOptions]));
	ss.initClass($Serenity_QuickSearchInputOptions, $asm, {});
	ss.initClass($Serenity_ReflectionOptionsSetter, $asm, {});
	ss.initClass($Serenity_ReflectionUtils, $asm, {});
	ss.initClass($Serenity_StringFiltering, $asm, {
		getOperators: function() {
			var $t1 = [];
			$t1.push({ key: $Serenity_FilterOperators.contains });
			$t1.push({ key: $Serenity_FilterOperators.startsWith });
			$t1.push({ key: $Serenity_FilterOperators.EQ });
			$t1.push({ key: $Serenity_FilterOperators.NE });
			$t1.push({ key: $Serenity_FilterOperators.BW });
			return this.appendNullableOperators($t1);
		}
	}, $Serenity_BaseFiltering, [$Serenity_IFiltering]);
	ss.initClass($Serenity_StringInflector, $asm, {});
	ss.initClass($Serenity_SubDialogHelper, $asm, {});
	ss.initClass($Serenity_TemplatedWidget, $asm, {}, ss.makeGenericType($Serenity_TemplatedWidget$1, [Object]));
	ss.initClass($Serenity_TextAreaEditor, $asm, {
		get_value: function() {
			return this.element.val();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [$Serenity_TextAreaEditorOptions]), [$Serenity_IStringValue]);
	ss.initClass($Serenity_TextAreaEditorOptions, $asm, {});
	ss.initClass($Serenity_TimeEditor, $asm, {
		get_value: function() {
			var hour = Serenity.IdExtensions.convertToId(this.element.val());
			var minute = Serenity.IdExtensions.convertToId(this.$minutes.val());
			if (ss.isNullOrUndefined(hour) || ss.isNullOrUndefined(minute)) {
				return null;
			}
			return ss.unbox(hour) * 60 + ss.unbox(minute);
		},
		set_value: function(value) {
			if (ss.isNullOrUndefined(value)) {
				if (this.options.noEmptyOption) {
					this.element.val(this.options.startHour.toString());
					this.$minutes.val('0');
				}
				else {
					this.element.val('');
					this.$minutes.val('0');
				}
			}
			else {
				this.element.val(Math.floor(ss.unbox(value) / 60).toString());
				this.$minutes.val((ss.unbox(value) % 60).toString());
			}
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]), [$Serenity_IDoubleValue]);
	ss.initClass($Serenity_Toolbar, $asm, {
		$createButton: function(container, b) {
			var cssClass = ss.coalesce(b.cssClass, '');
			var btn = $('<div class="tool-button"><div class="button-outer"><span class="button-inner"></span></div></div>').appendTo(container);
			btn.addClass(cssClass);
			if (!Q.isEmptyOrNull(b.hint)) {
				btn.attr('title', b.hint);
			}
			btn.click(function(e) {
				if (btn.hasClass('disabled')) {
					return;
				}
				b.onClick(e);
			});
			var text = b.title;
			if (b.htmlEncode !== false) {
				text = Q.htmlEncode(b.title);
			}
			if (ss.isNullOrUndefined(text) || text.length === 0) {
				btn.addClass('no-text');
			}
			else {
				btn.find('span').html(text);
			}
		},
		destroy: function() {
			this.element.find('div.tool-button').unbind('click');
			$Serenity_Widget.prototype.destroy.call(this);
		},
		findButton: function(className) {
			if (ss.isValue(className) && ss.startsWithString(className, '.')) {
				className = className.substr(1);
			}
			return $('div.tool-button.' + className, this.element);
		}
	}, ss.makeGenericType($Serenity_Widget$1, [Object]));
	ss.initClass($Serenity_UploadHelper, $asm, {});
	ss.initClass($Serenity_URLEditor, $asm, {}, $Serenity_StringEditor, [$Serenity_IStringValue]);
	ss.initClass($Serenity_ValidationHelper, $asm, {});
	ss.initClass($Serenity_VX, $asm, {});
	ss.initClass($Serenity_WidgetPrototype, $asm, {});
	ss.initClass($Serenity_WX, $asm, {});
	ss.initClass($Serenity_ComponentModel_CategoryAttribute, $asm, {
		get_category: function() {
			return this.$2$CategoryField;
		},
		set_category: function(value) {
			this.$2$CategoryField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_CssClassAttribute, $asm, {
		get_cssClass: function() {
			return this.$2$CssClassField;
		},
		set_cssClass: function(value) {
			this.$2$CssClassField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_DefaultValueAttribute, $asm, {
		get_value: function() {
			return this.$2$ValueField;
		},
		set_value: function(value) {
			this.$2$ValueField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_EditorOptionAttribute, $asm, {
		get_key: function() {
			return this.$2$KeyField;
		},
		set_key: function(value) {
			this.$2$KeyField = value;
		},
		get_value: function() {
			return this.$2$ValueField;
		},
		set_value: function(value) {
			this.$2$ValueField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_EditorTypeAttributeBase, $asm, {
		setParams: function(editorParams) {
		}
	});
	ss.initClass($Serenity_ComponentModel_EditorTypeAttribute, $asm, {}, $Serenity_ComponentModel_EditorTypeAttributeBase);
	ss.initClass($Serenity_ComponentModel_HiddenAttribute, $asm, {});
	ss.initClass($Serenity_ComponentModel_HintAttribute, $asm, {
		get_hint: function() {
			return this.$2$HintField;
		},
		set_hint: function(value) {
			this.$2$HintField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_InsertableAttribute, $asm, {
		get_value: function() {
			return this.$2$ValueField;
		},
		set_value: function(value) {
			this.$2$ValueField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_MaxLengthAttribute, $asm, {
		get_maxLength: function() {
			return this.$2$MaxLengthField;
		},
		set_maxLength: function(value) {
			this.$2$MaxLengthField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_OneWayAttribute, $asm, {});
	ss.initClass($Serenity_ComponentModel_PlaceholderAttribute, $asm, {
		get_value: function() {
			return this.$2$ValueField;
		},
		set_value: function(value) {
			this.$2$ValueField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_ReadOnlyAttribute, $asm, {
		get_value: function() {
			return this.$2$ValueField;
		},
		set_value: function(value) {
			this.$2$ValueField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_RequiredAttribute, $asm, {
		get_isRequired: function() {
			return this.$2$IsRequiredField;
		},
		set_isRequired: function(value) {
			this.$2$IsRequiredField = value;
		}
	});
	ss.initClass($Serenity_ComponentModel_UpdatableAttribute, $asm, {
		get_value: function() {
			return this.$2$ValueField;
		},
		set_value: function(value) {
			this.$2$ValueField = value;
		}
	});
	ss.initClass($Serenity_Reporting_ReportDesignPanel, $asm, {
		addButtonClick: function(e) {
			e.preventDefault();
			//if (String.IsNullOrEmpty(ReportKey))
			//    return;
			//var dialog = new ReportDesignDialog(new ReportDesignDialogOptions());
			//Utils.BindToDataChange(dialog.Element, delegate
			//{
			//    RefreshDesignList();
			//});
			//dialog.LoadDataAndOpenDialog(new RetrieveResponse
			//{
			//    Entity = new ReportDesignEntity
			//    {
			//        ReportKey = ReportKey,
			//        ReportDesign = this.ById("DesignList").children("option").length > 0 ? "" : "[Varsayılan]"
			//    }
			//});
		},
		editButtonClick: function(e) {
			e.preventDefault();
			//var designId = SelectedDesignId;
			//if (designId == null)
			//    return;
			//var dialog = new ReportDesignDialog(new ReportDesignDialogOptions());
			//Utils.BindToDataChange(dialog.Element, delegate
			//{
			//    RefreshDesignList();
			//});
			//dialog.LoadByIdAndOpenDialog(designId.Value);
		},
		refreshDesignList: function() {
			Q.serviceCall({ service: 'ReportDesign/List', request: { ReportKey: this.get_reportKey() }, onSuccess: ss.mkdel(this, function(r) {
				this.setDesignList(r.Entities);
			}) });
		},
		setDesignList: function(designs) {
			var dl = this.byId$1('DesignList');
			Q.clearOptions(dl);
			for (var $t1 = 0; $t1 < designs.length; $t1++) {
				var design = designs[$t1];
				Q.addOption(dl, design.DesignId, design.DesignId);
			}
		},
		get_reportKey: function() {
			return this.$5$ReportKeyField;
		},
		set_reportKey: function(value) {
			this.$5$ReportKeyField = value;
		},
		get_selectedDesignId: function() {
			return Q.trimToNull(this.byId$1('DesignList').val());
		}
	}, ss.makeGenericType($Serenity_TemplatedWidget$1, [Object]));
	ss.initClass($Serenity_Reporting_ReportDialog, $asm, {
		createPropertyGrid: function() {
			if (ss.isValue(this.$propertyGrid)) {
				this.byId$1('PropertyGrid').html('').attr('class', '');
				this.$propertyGrid = null;
			}
			var $t2 = this.byId$1('PropertyGrid');
			var $t1 = $Serenity_PropertyGridOptions.$ctor();
			$t1.idPrefix = this.get_idPrefix();
			$t1.useCategories = true;
			$t1.items = this.$propertyItems;
			this.$propertyGrid = (new $Serenity_PropertyGrid($t2, $t1)).init(null);
		},
		loadReport: function(reportKey) {
			Q.serviceCall({ service: 'Report/Retrieve', request: { ReportKey: reportKey }, onSuccess: ss.mkdel(this, function(response) {
				this.$reportKey = ss.coalesce(response.ReportKey, reportKey);
				this.$propertyItems = response.Properties || [];
				this.get_element().dialog().dialog('option', 'title', response.Title);
				this.createPropertyGrid();
				var $t2 = this.$propertyGrid;
				var $t1 = response.InitialSettings;
				if (ss.isNullOrUndefined($t1)) {
					$t1 = new Object();
				}
				$t2.load($t1);
				this.toolbar.findButton('print-preview-button').toggle(!response.IsDataOnlyReport);
				this.toolbar.findButton('export-pdf-button').toggle(!response.IsDataOnlyReport);
				this.toolbar.findButton('export-docx-button').toggle(!response.IsDataOnlyReport);
				this.dialogOpen();
			}) });
		},
		executeReport: function(targetFrame, exportType) {
			if (!this.validateForm()) {
				return;
			}
			var parameters = new Object();
			this.$propertyGrid.save(parameters);
			Q$Externals.postToService({ service: 'Report/Execute', request: { ReportKey: this.$reportKey, DesignId: 'Default', ExportType: exportType, Parameters: parameters }, target: targetFrame });
		},
		getToolbarButtons: function() {
			var $t1 = [];
			$t1.push({ title: 'Önizleme', cssClass: 'print-preview-button', onClick: ss.mkdel(this, function() {
				this.executeReport('_blank', null);
			}) });
			$t1.push({ title: 'PDF', cssClass: 'export-pdf-button', onClick: ss.mkdel(this, function() {
				this.executeReport('', 'Pdf');
			}) });
			$t1.push({ title: 'Excel', cssClass: 'export-xlsx-button', onClick: ss.mkdel(this, function() {
				this.executeReport('', 'Xlsx');
			}) });
			$t1.push({ title: 'Word', cssClass: 'export-docx-button', onClick: ss.mkdel(this, function() {
				this.executeReport('', 'Docx');
			}) });
			return $t1;
		}
	}, ss.makeGenericType($Serenity_TemplatedDialog$1, [Object]), [$Serenity_IDialog]);
	ss.initClass($Serenity_Reporting_ReportPage, $asm, {
		$updateMatchFlags: function(text) {
			var liList = $('#ReportList').find('li').removeClass('non-match');
			text = Q.trimToNull(text);
			if (ss.isNullOrUndefined(text)) {
				liList.children('ul').hide();
				liList.show().removeClass('expanded');
				return;
			}
			var parts = ss.netSplit(text, [44, 32].map(function(i) {
				return String.fromCharCode(i);
			}), null, 1);
			for (var i = 0; i < parts.length; i++) {
				parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
			}
			var reportItems = liList.filter('.report-item');
			reportItems.each(function(i1, e) {
				var x = $(e);
				var title = Select2.util.stripDiacritics(ss.coalesce(x.text(), '').toUpperCase());
				for (var $t1 = 0; $t1 < parts.length; $t1++) {
					var p = parts[$t1];
					if (ss.isValue(p) && !(title.indexOf(p) !== -1)) {
						x.addClass('non-match');
						break;
					}
				}
			});
			var matchingItems = reportItems.not('.non-match');
			var visibles = matchingItems.parents('li').add(matchingItems);
			var nonVisibles = liList.not(visibles);
			nonVisibles.hide().addClass('non-match');
			visibles.show();
			if (visibles.length <= 100) {
				liList.children('ul').show();
				liList.addClass('expanded');
			}
		},
		$categoryClick: function(e) {
			var li = $(e.target).closest('li');
			if (li.hasClass('expanded')) {
				li.find('ul').hide('fast');
				li.removeClass('expanded');
				li.find('li').removeClass('expanded');
			}
			else {
				li.addClass('expanded');
				li.children('ul').show('fast');
				if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
					li.children('ul').children('li').children('.line').click();
				}
			}
		},
		$reportLinkClick: function(e) {
			e.preventDefault();
			var dialog = new $Serenity_Reporting_ReportDialog({ reportKey: $(e.target).data('key') });
		}
	}, $Serenity_Widget);
	ss.initClass($System_ComponentModel_DisplayNameAttribute, $asm, {
		get_displayName: function() {
			return this.$2$DisplayNameField;
		},
		set_displayName: function(value) {
			this.$2$DisplayNameField = value;
		}
	});
	ss.setMetadata($Serenity_AsyncLookupEditor, { attr: [new Serenity.EditorAttribute(), new Serenity.OptionsTypeAttribute($Serenity_LookupEditorOptions)] });
	ss.setMetadata($Serenity_BooleanEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Checkbox'), new Serenity.ElementAttribute('<input type="checkbox"/>')] });
	ss.setMetadata($Serenity_CheckListEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute("Checkbox'lı Liste"), new Serenity.OptionsTypeAttribute($Serenity_CheckListEditorOptions), new Serenity.ElementAttribute('<ul/>')] });
	ss.setMetadata($Serenity_CheckListEditorOptions, { members: [{ attr: [new $Serenity_ComponentModel_HiddenAttribute()], name: 'Items', type: 16, returnType: Array, getter: { name: 'get_Items', type: 8, params: [], returnType: Array, fget: 'items' }, setter: { name: 'set_Items', type: 8, params: [Array], returnType: Object, fset: 'items' }, fname: 'items' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Tümünü Seç Metni')], name: 'SelectAllOptionText', type: 16, returnType: String, getter: { name: 'get_SelectAllOptionText', type: 8, params: [], returnType: String, fget: 'selectAllOptionText' }, setter: { name: 'set_SelectAllOptionText', type: 8, params: [String], returnType: Object, fset: 'selectAllOptionText' }, fname: 'selectAllOptionText' }] });
	ss.setMetadata($Serenity_CheckTreeEditor$2, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.IdPropertyAttribute('id')] });
	ss.setMetadata($Serenity_DateEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Tarih'), new Serenity.ElementAttribute('<input type="text"/>')], members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'MaxValue', type: 16, returnType: String, getter: { name: 'get_MaxValue', type: 8, sname: 'get_maxValue', returnType: String, params: [] }, setter: { name: 'set_MaxValue', type: 8, sname: 'set_maxValue', returnType: Object, params: [String] } }, { attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'MinValue', type: 16, returnType: String, getter: { name: 'get_MinValue', type: 8, sname: 'get_minValue', returnType: String, params: [] }, setter: { name: 'set_MinValue', type: 8, sname: 'set_minValue', returnType: Object, params: [String] } }, { attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'SqlMinMax', type: 16, returnType: Boolean, getter: { name: 'get_SqlMinMax', type: 8, sname: 'get_sqlMinMax', returnType: Boolean, params: [] }, setter: { name: 'set_SqlMinMax', type: 8, sname: 'set_sqlMinMax', returnType: Object, params: [Boolean] } }] });
	ss.setMetadata($Serenity_DateTimeEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Tarih/Zaman'), new Serenity.ElementAttribute('<input type="text"/>')], members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'MaxValue', type: 16, returnType: String, getter: { name: 'get_MaxValue', type: 8, sname: 'get_maxValue', returnType: String, params: [] }, setter: { name: 'set_MaxValue', type: 8, sname: 'set_maxValue', returnType: Object, params: [String] } }, { attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'MinValue', type: 16, returnType: String, getter: { name: 'get_MinValue', type: 8, sname: 'get_minValue', returnType: String, params: [] }, setter: { name: 'set_MinValue', type: 8, sname: 'set_minValue', returnType: Object, params: [String] } }, { attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'SqlMinMax', type: 16, returnType: Boolean, getter: { name: 'get_SqlMinMax', type: 8, sname: 'get_sqlMinMax', returnType: Boolean, params: [] }, setter: { name: 'set_SqlMinMax', type: 8, sname: 'set_sqlMinMax', returnType: Object, params: [Boolean] } }] });
	ss.setMetadata($Serenity_DateYearEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Yıl'), new Serenity.OptionsTypeAttribute($Serenity_DateYearEditorOptions), new Serenity.ElementAttribute('<input type="hidden"/>')] });
	ss.setMetadata($Serenity_DecimalEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Ondalıklı Sayı'), new Serenity.OptionsTypeAttribute($Serenity_DecimalEditorOptions), new Serenity.ElementAttribute('<input type="text"/>')] });
	ss.setMetadata($Serenity_DecimalEditorOptions, { members: [{ attr: [new $System_ComponentModel_DisplayNameAttribute('Ondalık'), new $Serenity_ComponentModel_EditorTypeAttribute('Integer')], name: 'Decimals', type: 16, returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]), getter: { name: 'get_Decimals', type: 8, params: [], returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]), fget: 'decimals' }, setter: { name: 'set_Decimals', type: 8, params: [ss.makeGenericType(ss.Nullable$1, [ss.Int32])], returnType: Object, fset: 'decimals' }, fname: 'decimals' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Max Değer')], name: 'MaxValue', type: 16, returnType: String, getter: { name: 'get_MaxValue', type: 8, params: [], returnType: String, fget: 'maxValue' }, setter: { name: 'set_MaxValue', type: 8, params: [String], returnType: Object, fset: 'maxValue' }, fname: 'maxValue' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Min Değer')], name: 'MinValue', type: 16, returnType: String, getter: { name: 'get_MinValue', type: 8, params: [], returnType: String, fget: 'minValue' }, setter: { name: 'set_MinValue', type: 8, params: [String], returnType: Object, fset: 'minValue' }, fname: 'minValue' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Ondalıkları Sıfırla Doldur'), new $Serenity_ComponentModel_EditorTypeAttribute('Boolean')], name: 'PadDecimals', type: 16, returnType: ss.makeGenericType(ss.Nullable$1, [Boolean]), getter: { name: 'get_PadDecimals', type: 8, params: [], returnType: ss.makeGenericType(ss.Nullable$1, [Boolean]), fget: 'padDecimals' }, setter: { name: 'set_PadDecimals', type: 8, params: [ss.makeGenericType(ss.Nullable$1, [Boolean])], returnType: Object, fset: 'padDecimals' }, fname: 'padDecimals' }] });
	ss.setMetadata($Serenity_EditorFiltering, { members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'EditorType', type: 16, returnType: String, getter: { name: 'get_EditorType', type: 8, sname: 'get_editorType', returnType: String, params: [] }, setter: { name: 'set_EditorType', type: 8, sname: 'set_editorType', returnType: Object, params: [String] } }, { attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'UseLike', type: 16, returnType: Boolean, getter: { name: 'get_UseLike', type: 8, sname: 'get_useLike', returnType: Boolean, params: [] }, setter: { name: 'set_UseLike', type: 8, sname: 'set_useLike', returnType: Object, params: [Boolean] } }, { attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'UseRelative', type: 16, returnType: Boolean, getter: { name: 'get_UseRelative', type: 8, sname: 'get_useRelative', returnType: Boolean, params: [] }, setter: { name: 'set_UseRelative', type: 8, sname: 'set_useRelative', returnType: Object, params: [Boolean] } }] });
	ss.setMetadata($Serenity_EditorTypeEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Editör Tipi'), new Serenity.ElementAttribute('<input type="hidden" />')] });
	ss.setMetadata($Serenity_EmailEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('E-posta'), new Serenity.ElementAttribute('<input type="text"/>')] });
	ss.setMetadata($Serenity_EmailEditorOptions, { members: [{ attr: [new $System_ComponentModel_DisplayNameAttribute('Etki Alanı')], name: 'Domain', type: 16, returnType: String, getter: { name: 'get_Domain', type: 8, params: [], returnType: String, fget: 'domain' }, setter: { name: 'set_Domain', type: 8, params: [String], returnType: Object, fset: 'domain' }, fname: 'domain' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Etki Alanı Salt Okunur')], name: 'ReadOnlyDomain', type: 16, returnType: Boolean, getter: { name: 'get_ReadOnlyDomain', type: 8, params: [], returnType: Boolean, fget: 'readOnlyDomain' }, setter: { name: 'set_ReadOnlyDomain', type: 8, params: [Boolean], returnType: Object, fset: 'readOnlyDomain' }, fname: 'readOnlyDomain' }] });
	ss.setMetadata($Serenity_EnumEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Enumeration'), new Serenity.OptionsTypeAttribute($Serenity_EnumEditorOptions), new Serenity.ElementAttribute('<input type="hidden"/>')] });
	ss.setMetadata($Serenity_EnumEditorOptions, { members: [{ attr: [new $System_ComponentModel_DisplayNameAttribute('Enum Type Key')], name: 'EnumKey', type: 16, returnType: String, getter: { name: 'get_EnumKey', type: 8, params: [], returnType: String, fget: 'enumKey' }, setter: { name: 'set_EnumKey', type: 8, params: [String], returnType: Object, fset: 'enumKey' }, fname: 'enumKey' }] });
	ss.setMetadata($Serenity_HtmlContentEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Html İçerik'), new Serenity.OptionsTypeAttribute($Serenity_HtmlContentEditorOptions), new Serenity.ElementAttribute('<textarea />')] });
	ss.setMetadata($Serenity_HtmlContentEditorOptions, { members: [{ attr: [new $Serenity_ComponentModel_HiddenAttribute()], name: 'Cols', type: 16, returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]), getter: { name: 'get_Cols', type: 8, params: [], returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]), fget: 'cols' }, setter: { name: 'set_Cols', type: 8, params: [ss.makeGenericType(ss.Nullable$1, [ss.Int32])], returnType: Object, fset: 'cols' }, fname: 'cols' }, { attr: [new $Serenity_ComponentModel_HiddenAttribute()], name: 'Rows', type: 16, returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]), getter: { name: 'get_Rows', type: 8, params: [], returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]), fget: 'rows' }, setter: { name: 'set_Rows', type: 8, params: [ss.makeGenericType(ss.Nullable$1, [ss.Int32])], returnType: Object, fset: 'rows' }, fname: 'rows' }] });
	ss.setMetadata($Serenity_HtmlReportContentEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Html İçerik (Rapor Uyumlu Kısıtlı Set)'), new Serenity.OptionsTypeAttribute($Serenity_HtmlContentEditorOptions), new Serenity.ElementAttribute('<textarea />')] });
	ss.setMetadata($Serenity_ImageUploadEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Image Upload'), new Serenity.OptionsTypeAttribute($Serenity_ImageUploadEditorOptions), new Serenity.ElementAttribute('<div/>')] });
	ss.setMetadata($Serenity_ImageUploadEditorOptions, { members: [{ attr: [new $System_ComponentModel_DisplayNameAttribute('Allow Non Image Files')], name: 'AllowNonImage', type: 16, returnType: Boolean, getter: { name: 'get_AllowNonImage', type: 8, params: [], returnType: Boolean, fget: 'allowNonImage' }, setter: { name: 'set_AllowNonImage', type: 8, params: [Boolean], returnType: Object, fset: 'allowNonImage' }, fname: 'allowNonImage' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Max Height')], name: 'MaxHeight', type: 16, returnType: ss.Int32, getter: { name: 'get_MaxHeight', type: 8, params: [], returnType: ss.Int32, fget: 'maxHeight' }, setter: { name: 'set_MaxHeight', type: 8, params: [ss.Int32], returnType: Object, fset: 'maxHeight' }, fname: 'maxHeight' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Max Size')], name: 'MaxSize', type: 16, returnType: ss.Int32, getter: { name: 'get_MaxSize', type: 8, params: [], returnType: ss.Int32, fget: 'maxSize' }, setter: { name: 'set_MaxSize', type: 8, params: [ss.Int32], returnType: Object, fset: 'maxSize' }, fname: 'maxSize' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Min Width')], name: 'MaxWidth', type: 16, returnType: ss.Int32, getter: { name: 'get_MaxWidth', type: 8, params: [], returnType: ss.Int32, fget: 'maxWidth' }, setter: { name: 'set_MaxWidth', type: 8, params: [ss.Int32], returnType: Object, fset: 'maxWidth' }, fname: 'maxWidth' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Max Height')], name: 'MinHeight', type: 16, returnType: ss.Int32, getter: { name: 'get_MinHeight', type: 8, params: [], returnType: ss.Int32, fget: 'minHeight' }, setter: { name: 'set_MinHeight', type: 8, params: [ss.Int32], returnType: Object, fset: 'minHeight' }, fname: 'minHeight' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Min Size')], name: 'MinSize', type: 16, returnType: ss.Int32, getter: { name: 'get_MinSize', type: 8, params: [], returnType: ss.Int32, fget: 'minSize' }, setter: { name: 'set_MinSize', type: 8, params: [ss.Int32], returnType: Object, fset: 'minSize' }, fname: 'minSize' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Min Width')], name: 'MinWidth', type: 16, returnType: ss.Int32, getter: { name: 'get_MinWidth', type: 8, params: [], returnType: ss.Int32, fget: 'minWidth' }, setter: { name: 'set_MinWidth', type: 8, params: [ss.Int32], returnType: Object, fset: 'minWidth' }, fname: 'minWidth' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Original Name Property')], name: 'OriginalNameProperty', type: 16, returnType: String, getter: { name: 'get_OriginalNameProperty', type: 8, params: [], returnType: String, fget: 'originalNameProperty' }, setter: { name: 'set_OriginalNameProperty', type: 8, params: [String], returnType: Object, fset: 'originalNameProperty' }, fname: 'originalNameProperty' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('UrlPrefix')], name: 'UrlPrefix', type: 16, returnType: String, getter: { name: 'get_UrlPrefix', type: 8, params: [], returnType: String, fget: 'urlPrefix' }, setter: { name: 'set_UrlPrefix', type: 8, params: [String], returnType: Object, fset: 'urlPrefix' }, fname: 'urlPrefix' }] });
	ss.setMetadata($Serenity_IntegerEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Tamsayı'), new Serenity.OptionsTypeAttribute($Serenity_IntegerEditorOptions), new Serenity.ElementAttribute('<input type="text"/>')] });
	ss.setMetadata($Serenity_IntegerEditorOptions, { members: [{ attr: [new $System_ComponentModel_DisplayNameAttribute('Max Değer')], name: 'MaxValue', type: 16, returnType: ss.Int32, getter: { name: 'get_MaxValue', type: 8, params: [], returnType: ss.Int32, fget: 'maxValue' }, setter: { name: 'set_MaxValue', type: 8, params: [ss.Int32], returnType: Object, fset: 'maxValue' }, fname: 'maxValue' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Min Değer')], name: 'MinValue', type: 16, returnType: ss.Int32, getter: { name: 'get_MinValue', type: 8, params: [], returnType: ss.Int32, fget: 'minValue' }, setter: { name: 'set_MinValue', type: 8, params: [ss.Int32], returnType: Object, fset: 'minValue' }, fname: 'minValue' }] });
	ss.setMetadata($Serenity_LookupEditor, { attr: [new Serenity.EditorAttribute(), new Serenity.OptionsTypeAttribute($Serenity_LookupEditorOptions)] });
	ss.setMetadata($Serenity_LookupEditorBase$2, { attr: [new Serenity.ElementAttribute('<input type="hidden"/>')] });
	ss.setMetadata($Serenity_MaskedEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Maskeli Giriş'), new Serenity.OptionsTypeAttribute($Serenity_MaskedEditorOptions), new Serenity.ElementAttribute('<input type="text"/>')] });
	ss.setMetadata($Serenity_MaskedEditorOptions, { members: [{ attr: [new $System_ComponentModel_DisplayNameAttribute('Giriş Maskesi')], name: 'Mask', type: 16, returnType: String, getter: { name: 'get_Mask', type: 8, params: [], returnType: String, fget: 'mask' }, setter: { name: 'set_Mask', type: 8, params: [String], returnType: Object, fset: 'mask' }, fname: 'mask' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Yer Tutucu Karakter')], name: 'Placeholder', type: 16, returnType: String, getter: { name: 'get_Placeholder', type: 8, params: [], returnType: String, fget: 'placeholder' }, setter: { name: 'set_Placeholder', type: 8, params: [String], returnType: Object, fset: 'placeholder' }, fname: 'placeholder' }] });
	ss.setMetadata($Serenity_MultipleImageUploadEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('MultipleImage Upload'), new Serenity.OptionsTypeAttribute($Serenity_ImageUploadEditorOptions), new Serenity.ElementAttribute('<div/>')], members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'JsonEncodeValue', type: 16, returnType: Boolean, getter: { name: 'get_JsonEncodeValue', type: 8, sname: 'get_jsonEncodeValue', returnType: Boolean, params: [] }, setter: { name: 'set_JsonEncodeValue', type: 8, sname: 'set_jsonEncodeValue', returnType: Object, params: [Boolean] } }] });
	ss.setMetadata($Serenity_PasswordEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Şifre')] });
	ss.setMetadata($Serenity_PersonNameEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Kişi İsim'), new Serenity.ElementAttribute('<input type="text"/>')] });
	ss.setMetadata($Serenity_PhoneEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Telefon'), new Serenity.OptionsTypeAttribute($Serenity_PhoneEditorOptions), new Serenity.ElementAttribute('<input type="text"/>')] });
	ss.setMetadata($Serenity_PhoneEditorOptions, { members: [{ attr: [new $System_ComponentModel_DisplayNameAttribute('Dahili Girişine İzin Ver')], name: 'AllowExtension', type: 16, returnType: Boolean, getter: { name: 'get_AllowExtension', type: 8, params: [], returnType: Boolean, fget: 'allowExtension' }, setter: { name: 'set_AllowExtension', type: 8, params: [Boolean], returnType: Object, fset: 'allowExtension' }, fname: 'allowExtension' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Uluslararası Telefon Girişine İzin Ver')], name: 'AllowInternational', type: 16, returnType: Boolean, getter: { name: 'get_AllowInternational', type: 8, params: [], returnType: Boolean, fget: 'allowInternational' }, setter: { name: 'set_AllowInternational', type: 8, params: [Boolean], returnType: Object, fset: 'allowInternational' }, fname: 'allowInternational' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Dahili Telefon')], name: 'Internal', type: 16, returnType: Boolean, getter: { name: 'get_Internal', type: 8, params: [], returnType: Boolean, fget: 'internal' }, setter: { name: 'set_Internal', type: 8, params: [Boolean], returnType: Object, fset: 'internal' }, fname: 'internal' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Cep Telefonu')], name: 'Mobile', type: 16, returnType: Boolean, getter: { name: 'get_Mobile', type: 8, params: [], returnType: Boolean, fget: 'mobile' }, setter: { name: 'set_Mobile', type: 8, params: [Boolean], returnType: Object, fset: 'mobile' }, fname: 'mobile' }, { attr: [new $System_ComponentModel_DisplayNameAttribute('Birden Çok Girişe İzin Ver')], name: 'Multiple', type: 16, returnType: Boolean, getter: { name: 'get_Multiple', type: 8, params: [], returnType: Boolean, fget: 'multiple' }, setter: { name: 'set_Multiple', type: 8, params: [Boolean], returnType: Object, fset: 'multiple' }, fname: 'multiple' }] });
	ss.setMetadata($Serenity_Select2AjaxEditor$2, { attr: [new Serenity.ElementAttribute('<input type="hidden"/>')] });
	ss.setMetadata($Serenity_Select2Editor$2, { attr: [new Serenity.ElementAttribute('<input type="hidden"/>')] });
	ss.setMetadata($Serenity_SelectEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Açılır Liste'), new Serenity.OptionsTypeAttribute($Serenity_SelectEditorOptions), new Serenity.ElementAttribute('<input type="hidden"/>')] });
	ss.setMetadata($Serenity_SelectEditorOptions, { members: [{ attr: [new $System_ComponentModel_DisplayNameAttribute('Boş Eleman Metni')], name: 'EmptyOptionText', type: 16, returnType: String, getter: { name: 'get_EmptyOptionText', type: 8, params: [], returnType: String, fget: 'emptyOptionText' }, setter: { name: 'set_EmptyOptionText', type: 8, params: [String], returnType: Object, fset: 'emptyOptionText' }, fname: 'emptyOptionText' }, { attr: [new $Serenity_ComponentModel_HiddenAttribute()], name: 'Items', type: 16, returnType: Array, getter: { name: 'get_Items', type: 8, params: [], returnType: Array, fget: 'items' }, setter: { name: 'set_Items', type: 8, params: [Array], returnType: Object, fset: 'items' }, fname: 'items' }] });
	ss.setMetadata($Serenity_StringEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Metin'), new Serenity.ElementAttribute('<input type="text"/>')] });
	ss.setMetadata($Serenity_TextAreaEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Çok Satırlı Metin'), new Serenity.OptionsTypeAttribute($Serenity_TextAreaEditorOptions), new Serenity.ElementAttribute('<textarea />')] });
	ss.setMetadata($Serenity_TextAreaEditorOptions, { members: [{ attr: [new $Serenity_ComponentModel_HiddenAttribute()], name: 'Cols', type: 16, returnType: ss.Int32, getter: { name: 'get_Cols', type: 8, params: [], returnType: ss.Int32, fget: 'cols' }, setter: { name: 'set_Cols', type: 8, params: [ss.Int32], returnType: Object, fset: 'cols' }, fname: 'cols' }, { attr: [new $Serenity_ComponentModel_HiddenAttribute()], name: 'Rows', type: 16, returnType: ss.Int32, getter: { name: 'get_Rows', type: 8, params: [], returnType: ss.Int32, fget: 'rows' }, setter: { name: 'set_Rows', type: 8, params: [ss.Int32], returnType: Object, fset: 'rows' }, fname: 'rows' }] });
	ss.setMetadata($Serenity_TimeEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('Zaman'), new Serenity.OptionsTypeAttribute(Object), new Serenity.ElementAttribute('<select/>')] });
	ss.setMetadata($Serenity_URLEditor, { attr: [new Serenity.EditorAttribute(), new $System_ComponentModel_DisplayNameAttribute('URL')] });
	ss.setMetadata($Serenity_ComponentModel_EditorOptionAttribute, { attrAllowMultiple: true });
	(function() {
		$Serenity_Widget.$nextWidgetNumber = 0;
	})();
	(function() {
		$Serenity_FilterOperators.isTrue = 'true';
		$Serenity_FilterOperators.isFalse = 'false';
		$Serenity_FilterOperators.contains = 'contains';
		$Serenity_FilterOperators.startsWith = 'startswith';
		$Serenity_FilterOperators.EQ = 'eq';
		$Serenity_FilterOperators.NE = 'ne';
		$Serenity_FilterOperators.GT = 'gt';
		$Serenity_FilterOperators.GE = 'ge';
		$Serenity_FilterOperators.LT = 'lt';
		$Serenity_FilterOperators.LE = 'le';
		$Serenity_FilterOperators.BW = 'bw';
		$Serenity_FilterOperators.IN = 'in';
		$Serenity_FilterOperators.isNull = 'isnull';
		$Serenity_FilterOperators.isNotNull = 'isnotnull';
		$Serenity_FilterOperators.toCriteriaOperator = null;
		$Serenity_FilterOperators.toCriteriaOperator = {};
		$Serenity_FilterOperators.toCriteriaOperator[$Serenity_FilterOperators.EQ] = '=';
		$Serenity_FilterOperators.toCriteriaOperator[$Serenity_FilterOperators.NE] = '!=';
		$Serenity_FilterOperators.toCriteriaOperator[$Serenity_FilterOperators.GT] = '>';
		$Serenity_FilterOperators.toCriteriaOperator[$Serenity_FilterOperators.GE] = '>=';
		$Serenity_FilterOperators.toCriteriaOperator[$Serenity_FilterOperators.LT] = '<';
		$Serenity_FilterOperators.toCriteriaOperator[$Serenity_FilterOperators.LE] = '<=';
	})();
	(function() {
		$Serenity_EditorTypeRegistry.$knownTypes = null;
	})();
	(function() {
		$Serenity_PropertyGrid.$knownEditorTypes = null;
		$Serenity_PropertyGrid.$knownEditorTypes = {};
	})();
	(function() {
		$Serenity_DialogExtensions.$enterKeyCode = 13;
	})();
	(function() {
		$Serenity_FilteringTypeRegistry.$knownTypes = null;
	})();
	(function() {
		$Serenity_FilterPanel.panelTemplate = "<div id='~_Rows' class='filter-lines'></div><div id='~_Buttons' class='buttons'><button id='~_AddButton' class='btn btn-primary add'></button><button id='~_SearchButton' class='btn btn-success search'></button><button id='~_ResetButton' class='btn btn-danger reset'></button></div><div style='clear: both'></div>";
		$Serenity_FilterPanel.rowTemplate = "<div class='filter-line'><a class='delete'><span></span></a><div class='l'><a class='rightparen' href='#'>)</a><a class='andor' href='#'></a><a class='leftparen' href='#'>(</a></div><div class='f'><input type='hidden' class='field-select'></div><div class='o'></div><div class='v'></div><div style='clear: both'></div></div>";
	})();
	(function() {
		$Serenity_FormatterTypeRegistry.$knownTypes = null;
	})();
	(function() {
		$Serenity_DialogTypeRegistry.$knownTypes = {};
	})();
	(function() {
		$Serenity_PublicEditorTypes.$registeredTypes = null;
	})();
	(function() {
		$Serenity_EditorTypeEditor.$editorTypeList = null;
	})();
	(function() {
		$Serenity_StringInflector.$plural = null;
		$Serenity_StringInflector.$singular = null;
		$Serenity_StringInflector.$countable = null;
		$Serenity_StringInflector.$pluralizeCache = null;
		$Serenity_StringInflector.$singularizeCache = null;
		$Serenity_StringInflector.$initialized = false;
	})();
})();
