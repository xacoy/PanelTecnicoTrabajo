// ============================================
// GESTIÓN DIARIA V2 - APLICACIÓN MEJORADA
// Mejoras: Seguridad XSS, Accesibilidad, Rendimiento, Validación
// ============================================

const APP_VERSION = '2.8.0';

// ============================================
// ICONOS (línea, heredan el color del texto)
// ============================================

const Icons = {
    paths: {
        link: ['M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'],
        clipboard: ['M8 4h8v3H8z', 'M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2', 'M9 13h6', 'M9 17h4'],
        pin: ['M12 17v5', 'M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z'],
        refresh: ['M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', 'M3 3v5h5', 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16', 'M16 16h5v5'],
        more: ['M12 12h.01', 'M19 12h.01', 'M5 12h.01'],
        pencil: ['M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z', 'm15 5 4 4'],
        copy: ['M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'],
        trash: ['M3 6h18', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'],
        x: ['M18 6 6 18', 'm6 6 12 12'],
        note: ['M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z', 'M15 3v6h6'],
        listcheck: ['m9 11 3 3L22 4', 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'],
        plus: ['M5 12h14', 'M12 5v14'],
        chev: ['m6 9 6 6 6-6'],
        calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'],
        chart: ['M3 3v18h18', 'M18 17V9', 'M13 17V5', 'M8 17v-3'],
        cog: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'],
        download: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'm7 10 5 5 5-5', 'M12 15V3'],
        upload: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'm17 8-5-5-5 5', 'M12 3v12'],
        alert: ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', 'M12 9v4', 'M12 17h.01'],
        user: ['M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'],
        printer: ['M6 9V2h12v7', 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2', 'M6 14h12v8H6z'],
        file: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8'],
        sliders: ['M4 21v-7', 'M4 10V3', 'M12 21v-9', 'M12 8V3', 'M20 21v-5', 'M20 12V3', 'M1 14h6', 'M9 8h6', 'M17 16h6']
    },

    svg(name) {
        const parts = (this.paths[name] || []).map(d => `<path d="${d}"/>`).join('');
        return `<svg class="ico-svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${parts}</svg>`;
    },

    apply(root = document) {
        root.querySelectorAll('i[data-icon]').forEach(el => {
            el.innerHTML = this.svg(el.dataset.icon);
        });
    }
};

// ============================================
// UTILIDADES DE VALIDACIÓN Y SANITIZACIÓN
// ============================================

const Validators = {
    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    },

    isValidDate(dateString) {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(dateString)) return false;
        const date = new Date(dateString + 'T00:00:00');
        return !isNaN(date.getTime());
    },

    sanitizeText(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// ============================================
// UTILIDADES DOM SEGURAS
// ============================================

const DomUtils = {
    createEl(tag, options = {}) {
        const el = document.createElement(tag);
        if (options.class) el.className = options.class;
        if (options.id) el.id = options.id;
        if (options.text) el.textContent = options.text;
        if (options.html) el.innerHTML = options.html;
        if (options.attrs) Object.entries(options.attrs).forEach(([k, v]) => el.setAttribute(k, v));
        if (options.on) Object.entries(options.on).forEach(([event, handler]) =>
            el.addEventListener(event, handler)
        );
        return el;
    },

    setText(el, text) {
        el.textContent = text;
    },

    setAttr(el, key, value) {
        el.setAttribute(key, value);
    },

    getById(id) {
        return document.getElementById(id);
    },

    query(selector) {
        return document.querySelector(selector);
    },

    queryAll(selector) {
        return document.querySelectorAll(selector);
    }
};

// ============================================
// ESTADO GLOBAL Y CONFIGURACIÓN
// ============================================

const State = {
    currentQuarter: 1,
    currentType: 'incidencia',
    currentRole: 'generada',
    database: [],
    linkData: [],
    widgets: [],
    editingItemId: null,
    editType: 'incidencia',
    editRole: 'generada',

    quarterMonths: {
        1: { names: ["Enero", "Febrero", "Marzo"], nums: [1, 2, 3] },
        2: { names: ["Abril", "Mayo", "Junio"], nums: [4, 5, 6] },
        3: { names: ["Julio", "Agosto", "Septiembre"], nums: [7, 8, 9] },
        4: { names: ["Octubre", "Noviembre", "Diciembre"], nums: [10, 11, 12] }
    },

    // Datos de ejemplo. Los enlaces reales se cargan desde data/links.json
    // (ignorado por git) o con "Cargar" desde una copia de seguridad.
    INITIAL_LINKS: [
        {
            title: 'Categoría 1', id: 'c-ticketing', min: false, links: [
                { n: 'Ejemplo A', u: 'https://example.com/' }
            ]
        },
        {
            title: 'Categoría 2', id: 'c-activos', min: false, links: [
                { n: 'Ejemplo B', u: 'https://example.com/b' }
            ]
        }
    ],

    DEFAULT_WIDGETS: [
        {
            type: 'note',
            title: 'NOTA DE EJEMPLO',
            content: 'Escribe aquí tus plantillas o recordatorios.',
            min: true
        },
        {
            type: 'todo',
            title: 'TAREAS PENDIENTES',
            tasks: [],
            min: false
        }
    ]
};

// ============================================
// FORMATO DE DATOS
// ============================================

const Formatters = {
    getLocalTodayISO() {
        const today = new Date();
        const offset = today.getTimezoneOffset() * 60000;
        return new Date(today.getTime() - offset).toISOString().split('T')[0];
    },

    formatDateDM(dateString) {
        if (!dateString) return "";
        const parts = dateString.split('-');
        return parts.length === 3 ? `${parts[2]}-${parts[1]}` : dateString;
    },

    formatDateDMY(dateString) {
        if (!dateString) return "";
        const parts = dateString.split('-');
        return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : dateString;
    },

    formatDateLong(dateString) {
        if (!dateString) return "";
        const date = new Date(dateString + 'T00:00:00');
        return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('es-ES',
            { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    },

    getRoleLabel(role) {
        const labels = { generada: 'GEN', participada: 'PART', revisada: 'REV', intervenida: 'INT' };
        return labels[role] || (role ? role.charAt(0).toUpperCase() + role.slice(1) : '');
    }
};

// ============================================
// ALMACENAMIENTO LOCAL
// ============================================

const ReportConfig = {
    DEFAULTS: {
        worker: 'Nombre y apellidos - Puesto',
        unit: 'Órgano / Unidad',
        place: ''
    },
    KEYS: { worker: 'telework_worker_cfg', unit: 'telework_unit_cfg', place: 'telework_place_cfg' },

    get(field) {
        return localStorage.getItem(this.KEYS[field]) || this.DEFAULTS[field];
    },

    edit() {
        const labels = {
            worker: 'Empleado / Puesto (aparece en el informe impreso):',
            unit: 'Órgano / Unidad:',
            place: 'Localidad para la firma (opcional):'
        };
        Object.keys(this.KEYS).forEach(field => {
            const current = localStorage.getItem(this.KEYS[field]) || '';
            const value = prompt(labels[field], current);
            if (value === null) return;
            if (value.trim()) localStorage.setItem(this.KEYS[field], value.trim());
            else localStorage.removeItem(this.KEYS[field]);
        });
    }
};

const Storage = {
    loadDatabase() {
        try {
            return JSON.parse(localStorage.getItem('telework_db')) || [];
        } catch {
            return [];
        }
    },

    saveDatabase(data) {
        localStorage.setItem('telework_db', JSON.stringify(data));
    },

    loadLinks() {
        try {
            return JSON.parse(localStorage.getItem('gob_linkData_vFinal'));
        } catch {
            return null;
        }
    },

    // Enlaces por defecto: data/links.json (personal, no se sube a git),
    // luego data/links.example.json y, si no hay servidor, los de ejemplo del código
    async loadDefaultLinks() {
        for (const file of ['data/links.json', 'data/links.example.json']) {
            try {
                const res = await fetch(file);
                if (!res.ok) continue;
                const data = await res.json();
                if (Array.isArray(data) && data.length) return data;
            } catch { /* sin servidor (file://) o archivo inexistente */ }
        }
        return State.INITIAL_LINKS;
    },

    saveLinks(data) {
        localStorage.setItem('gob_linkData_vFinal', JSON.stringify(data));
    },

    loadWidgets() {
        try {
            const w = JSON.parse(localStorage.getItem('gob_widgets_vFinal')) || State.DEFAULT_WIDGETS;
            w.forEach(widget => {
                if (typeof widget.min !== 'boolean') widget.min = true;
                if (widget.type === 'todo') widget.min = false; // las listas se abren siempre al cargar
            });
            return w;
        } catch {
            return State.DEFAULT_WIDGETS;
        }
    },

    saveWidgets(data) {
        localStorage.setItem('gob_widgets_vFinal', JSON.stringify(data));
    },

    loadQuickNote() {
        return localStorage.getItem('gob_quick_note') || '';
    },

    saveQuickNote(data) {
        localStorage.setItem('gob_quick_note', data);
    },

    loadColumnWidths() {
        try {
            return JSON.parse(localStorage.getItem('gob_column_widths_v2'));
        } catch {
            return null;
        }
    },

    saveColumnWidths(data) {
        if (window.innerWidth > 1080) {
            localStorage.setItem('gob_column_widths_v2', JSON.stringify(data));
        }
    }
};

// ============================================
// FUNCIONES DE GESTIÓN DE ENLACES
// ============================================

const LinksManager = {
    render() {
        const container = DomUtils.getById('links-container');
        const badge = DomUtils.getById('categories-count');

        DomUtils.setText(badge, `${State.linkData.length} Categorías`);
        container.innerHTML = '';

        State.linkData.forEach((category, catIdx) => {
            const categoryDiv = this.createCategoryElement(category, catIdx);
            container.appendChild(categoryDiv);
        });

        Storage.saveLinks(State.linkData);
    },

    createCategoryElement(category, catIdx) {
        const categoryDiv = DomUtils.createEl('div', {
            class: `category ${category.min ? 'minimized' : ''}`,
            attrs: { id: category.id }
        });

        // Encabezado
        const header = DomUtils.createEl('div', { class: 'category-header' });
        const title = DomUtils.createEl('h3', { text: category.title });
        title.style.cursor = 'pointer';
        title.addEventListener('click', () => this.toggleMinimize(catIdx));

        const actions = DomUtils.createEl('div', { class: 'header-actions' });
        const btnAdd = DomUtils.createEl('button', {
            class: 'btn-action-icon',
            text: '+',
            attrs: { title: 'Añadir enlace', type: 'button' }
        });
        btnAdd.addEventListener('click', () => this.addLink(catIdx));

        const btnMin = DomUtils.createEl('button', {
            class: 'btn-action-icon',
            text: category.min ? '▢' : '—',
            attrs: { title: 'Minimizar', type: 'button' }
        });
        btnMin.addEventListener('click', () => this.toggleMinimize(catIdx));

        actions.appendChild(btnAdd);
        actions.appendChild(btnMin);
        header.appendChild(title);
        header.appendChild(actions);

        // Lista de enlaces
        const linksList = DomUtils.createEl('div', { class: 'links-list' });
        category.links.forEach((link, linkIdx) => {
            linksList.appendChild(this.createLinkElement(link, catIdx, linkIdx));
        });

        categoryDiv.appendChild(header);
        categoryDiv.appendChild(linksList);
        return categoryDiv;
    },

    createLinkElement(link, catIdx, linkIdx) {
        const wrapper = DomUtils.createEl('div', { class: 'link-wrapper' });

        const linkEl = DomUtils.createEl('a', {
            class: 'link-card',
            attrs: {
                href: Validators.isValidUrl(link.u) ? link.u : '#',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        });

        const dot = DomUtils.createEl('span', { class: 'dot' });
        const text = document.createTextNode(link.n);

        if (LinksManager.isValidColor(link.c)) {
            linkEl.classList.add('has-color');
            linkEl.style.setProperty('--link-color', link.c);
        }

        linkEl.appendChild(dot);
        linkEl.appendChild(text);

        const controls = DomUtils.createEl('div', { class: 'controls-hover' });

        const btnEdit = DomUtils.createEl('button', {
            text: '✎',
            attrs: { title: 'Editar', type: 'button' }
        });
        btnEdit.addEventListener('click', () => this.editLink(catIdx, linkIdx));

        const btnDel = DomUtils.createEl('button', {
            text: '✕',
            attrs: { title: 'Borrar', type: 'button' }
        });
        btnDel.addEventListener('click', () => this.deleteLink(catIdx, linkIdx));

        controls.appendChild(btnEdit);
        controls.appendChild(btnDel);

        wrapper.appendChild(linkEl);
        wrapper.appendChild(controls);
        return wrapper;
    },

    toggleMinimize(idx) {
        State.linkData[idx].min = !State.linkData[idx].min;
        this.render();
    },

    addLink(catIdx) {
        this.openModal(catIdx, null);
    },

    editLink(catIdx, linkIdx) {
        this.openModal(catIdx, linkIdx);
    },

    isValidColor(value) {
        return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);
    },

    PRESET_COLORS: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6', '#3b82f6', '#8b5cf6', '#ec4899', '#94a3b8'],
    modal: { catIdx: null, linkIdx: null, color: null },

    initModal() {
        const presets = DomUtils.getById('link-color-presets');
        this.PRESET_COLORS.forEach(color => {
            const btn = DomUtils.createEl('button', {
                class: 'link-color-dot',
                attrs: { type: 'button', role: 'radio', 'aria-checked': 'false', 'aria-label': 'Color ' + color, title: color, 'data-color': color }
            });
            btn.style.background = color;
            btn.addEventListener('click', () => this.setModalColor(color));
            presets.appendChild(btn);
        });

        DomUtils.getById('link-color-input').addEventListener('input', (e) => this.setModalColor(e.target.value));
        DomUtils.getById('link-color-reset').addEventListener('click', () => this.setModalColor(null));
        DomUtils.getById('btn-link-cancel').addEventListener('click', () => this.closeModal());
        DomUtils.getById('btn-link-save').addEventListener('click', () => this.saveModal());
        DomUtils.getById('linkModalOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'linkModalOverlay') this.closeModal();
        });
        ['link-name', 'link-url'].forEach(id => {
            DomUtils.getById(id).addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.saveModal();
            });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && DomUtils.getById('linkModalOverlay').classList.contains('open')) this.closeModal();
        });
    },

    setModalColor(color) {
        this.modal.color = this.isValidColor(color) ? color.toLowerCase() : null;
        DomUtils.queryAll('#link-color-presets .link-color-dot').forEach(btn => {
            const on = btn.dataset.color === this.modal.color;
            btn.classList.toggle('active', on);
            btn.setAttribute('aria-checked', String(on));
        });
        if (this.modal.color) DomUtils.getById('link-color-input').value = this.modal.color;
        DomUtils.getById('link-color-reset').classList.toggle('active', !this.modal.color);
    },

    openModal(catIdx, linkIdx) {
        const link = linkIdx === null ? null : State.linkData[catIdx].links[linkIdx];
        this.modal.catIdx = catIdx;
        this.modal.linkIdx = linkIdx;
        DomUtils.setText(DomUtils.getById('link-modal-title'), link ? '✎ Editar enlace' : '➕ Nuevo enlace');
        DomUtils.getById('link-name').value = link ? link.n : '';
        DomUtils.getById('link-url').value = link ? link.u : '';
        DomUtils.getById('link-color-input').value = '#3b82f6';
        this.setModalColor(link ? link.c : null);
        DomUtils.setText(DomUtils.getById('link-modal-error'), '');
        DomUtils.getById('linkModalOverlay').classList.add('open');
        DomUtils.getById('link-name').focus();
    },

    closeModal() {
        DomUtils.getById('linkModalOverlay').classList.remove('open');
    },

    saveModal() {
        const name = DomUtils.getById('link-name').value.trim();
        const url = DomUtils.getById('link-url').value.trim();
        const error = DomUtils.getById('link-modal-error');

        if (!name) {
            DomUtils.setText(error, 'Escribe un nombre para el enlace.');
            return;
        }
        if (!Validators.isValidUrl(url)) {
            DomUtils.setText(error, 'URL no válida. Incluye http:// o https://');
            return;
        }

        const link = { n: name, u: url };
        if (this.modal.color) link.c = this.modal.color;

        const links = State.linkData[this.modal.catIdx].links;
        if (this.modal.linkIdx === null) links.push(link);
        else links[this.modal.linkIdx] = link;

        this.closeModal();
        this.render();
    },

    deleteLink(catIdx, linkIdx) {
        if (!confirm("¿Eliminar este enlace?")) return;
        State.linkData[catIdx].links.splice(linkIdx, 1);
        this.render();
    }
};

// ============================================
// FUNCIONES DE GESTIÓN DE WIDGETS
// ============================================

// Cabecera que minimiza / expande una caja (bloc de notas y listas). Solo dura la sesión.
const NoteBox = {
    bind(box, header, onExpand) {
        header.addEventListener('click', (e) => {
            if (e.target.closest('.header-actions')) return;
            const collapsed = !box.classList.contains('collapsed');
            box.classList.toggle('collapsed', collapsed);
            header.setAttribute('aria-expanded', String(!collapsed));
            if (!collapsed && onExpand) onExpand();
            if (box._onToggle) box._onToggle(collapsed);
        });
        header.addEventListener('keydown', (e) => {
            if (e.target !== header || (e.key !== 'Enter' && e.key !== ' ')) return;
            e.preventDefault();
            header.click();
        });
    }
};

const WidgetsManager = {
    render() {
        const container = DomUtils.getById('sidebar-container');
        container.innerHTML = '';

        // Las listas van primero (debajo del bloc de notas) y después las notas
        const order = State.widgets.map((widget, idx) => idx)
            .sort((a, b) => (State.widgets[a].type === 'todo' ? 0 : 1) - (State.widgets[b].type === 'todo' ? 0 : 1));
        order.forEach(idx => {
            const widget = State.widgets[idx];
            container.appendChild(widget.type === 'todo'
                ? this.createTodoBox(widget, idx)
                : this.createWidgetElement(widget, idx));
        });

        FieldSizes.fitAll();
        Storage.saveWidgets(State.widgets);
    },

    // Las notas usan el mismo estilo que el bloc de notas y las listas
    createWidgetElement(widget, idx) {
        const box = DomUtils.createEl('div', { class: 'quick-note-box note-box' });

        const header = DomUtils.createEl('div', {
            class: 'quick-note-header',
            attrs: { role: 'button', tabindex: '0', 'aria-expanded': String(!widget.min), title: 'Minimizar / expandir' }
        });
        const title = DomUtils.createEl('span', { class: 'quick-note-title' });
        title.appendChild(DomUtils.createEl('span', { class: 'note-chevron', html: Icons.svg('chev'), attrs: { 'aria-hidden': 'true' } }));
        title.appendChild(DomUtils.createEl('span', { class: 'note-icon', html: Icons.svg('note') }));
        title.appendChild(DomUtils.createEl('span', { class: 'note-title-text', text: widget.title }));
        header.appendChild(title);

        const actions = DomUtils.createEl('div', { class: 'header-actions' });
        const btnEdit = DomUtils.createEl('button', {
            class: 'btn-action-icon',
            html: Icons.svg('pencil'),
            attrs: { title: 'Renombrar', type: 'button', 'aria-label': 'Renombrar nota' }
        });
        btnEdit.addEventListener('click', () => this.editTitle(idx));
        const btnDel = DomUtils.createEl('button', {
            class: 'btn-action-icon btn-danger-icon',
            html: Icons.svg('x'),
            attrs: { title: 'Eliminar', type: 'button', 'aria-label': 'Eliminar nota' }
        });
        btnDel.addEventListener('click', () => this.delete(idx));
        actions.appendChild(btnEdit);
        actions.appendChild(btnDel);
        header.appendChild(actions);

        const body = DomUtils.createEl('div', { class: 'note-body' });
        const textarea = DomUtils.createEl('textarea', {
            class: 'quick-note-textarea',
            text: widget.content,
            attrs: { placeholder: 'Escribe aquí tu nota...' }
        });
        if (widget.h) textarea.style.height = widget.h + 'px';
        else textarea.dataset.auto = '1';
        FieldSizes.observe(textarea, (h) => {
            delete textarea.dataset.auto;
            widget.h = h;
            Storage.saveWidgets(State.widgets);
        });
        textarea.addEventListener('input', (e) => {
            this.updateNote(idx, e.target.value);
            if (textarea.dataset.auto === '1') FieldSizes.fit(textarea);
        });
        body.appendChild(textarea);

        box.appendChild(header);
        box.appendChild(body);

        if (widget.min) box.classList.add('collapsed');
        box._onToggle = (collapsed) => {
            widget.min = collapsed;
            Storage.saveWidgets(State.widgets);
        };
        NoteBox.bind(box, header, () => FieldSizes.fitAll());
        return box;
    },

    // Campo de entrada y lista de tareas de una lista to-do
    buildTodoBody(widget, idx) {
        const input = DomUtils.createEl('input', {
            class: 'todo-in',
            attrs: {
                type: 'text',
                placeholder: '+ Tarea (Enter)...'
            }
        });
        input.addEventListener('keypress', (e) => this.addTask(e, idx));

        const list = DomUtils.createEl('ul', { class: 'todo-list' });
        if (widget.h) list.style.height = widget.h + 'px';
        FieldSizes.observe(list, (h) => {
            widget.h = h;
            Storage.saveWidgets(State.widgets);
        });
        widget.tasks.forEach((task, ti) => {
            const item = DomUtils.createEl('li', { class: 'todo-item' });
            const checkbox = DomUtils.createEl('input', {
                attrs: { type: 'checkbox', 'aria-label': 'Marcar como hecha' }
            });
            checkbox.checked = !!task.d;
            checkbox.addEventListener('change', () => this.toggleTask(idx, ti));

            const text = DomUtils.createEl('span', {
                class: `todo-text ${task.d ? 'done' : ''}`,
                text: task.t
            });
            text.addEventListener('click', () => this.toggleTask(idx, ti));

            const btnEditTask = DomUtils.createEl('span', {
                text: '✎',
                attrs: { title: 'Editar tarea', role: 'button', tabindex: '0', style: 'cursor:pointer; font-size:12px; color:var(--text-dim)' }
            });
            btnEditTask.addEventListener('click', () => this.startEditTask(item, text, idx, ti));
            btnEditTask.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.startEditTask(item, text, idx, ti);
            });

            const btnDel = DomUtils.createEl('span', {
                text: '✕',
                attrs: { title: 'Borrar tarea', style: 'cursor:pointer; font-size:11px; color:#ef4444' }
            });
            btnDel.addEventListener('click', () => this.deleteTask(idx, ti));

            item.appendChild(checkbox);
            item.appendChild(text);
            item.appendChild(btnEditTask);
            item.appendChild(btnDel);
            list.appendChild(item);
        });

        return [input, list];
    },

    // Listas minimizadas durante la sesión (siempre se abren al cargar)
    collapsedTodos: new WeakSet(),

    // Las listas usan el mismo estilo que el bloc de notas
    createTodoBox(widget, idx) {
        const box = DomUtils.createEl('div', { class: 'quick-note-box todo-box' });

        const header = DomUtils.createEl('div', {
            class: 'quick-note-header',
            attrs: { role: 'button', tabindex: '0', 'aria-expanded': 'true', title: 'Minimizar / expandir' }
        });
        const title = DomUtils.createEl('span', { class: 'quick-note-title' });
        title.appendChild(DomUtils.createEl('span', { class: 'note-chevron', html: Icons.svg('chev'), attrs: { 'aria-hidden': 'true' } }));
        title.appendChild(DomUtils.createEl('span', { class: 'note-icon', html: Icons.svg('listcheck') }));
        title.appendChild(DomUtils.createEl('span', { class: 'note-title-text', text: widget.title }));
        const done = widget.tasks.filter(task => task.d).length;
        title.appendChild(DomUtils.createEl('span', {
            class: 'counter-badge',
            text: `${done}/${widget.tasks.length}`,
            attrs: { title: 'Tareas hechas / total' }
        }));
        header.appendChild(title);

        const actions = DomUtils.createEl('div', { class: 'header-actions' });
        const btnEdit = DomUtils.createEl('button', {
            class: 'btn-action-icon',
            html: Icons.svg('pencil'),
            attrs: { title: 'Renombrar', type: 'button', 'aria-label': 'Renombrar lista' }
        });
        btnEdit.addEventListener('click', () => this.editTitle(idx));
        const btnDel = DomUtils.createEl('button', {
            class: 'btn-action-icon btn-danger-icon',
            html: Icons.svg('x'),
            attrs: { title: 'Eliminar', type: 'button', 'aria-label': 'Eliminar lista' }
        });
        btnDel.addEventListener('click', () => this.delete(idx));
        actions.appendChild(btnEdit);
        actions.appendChild(btnDel);
        header.appendChild(actions);

        const body = DomUtils.createEl('div', { class: 'note-body' });
        this.buildTodoBody(widget, idx).forEach(el => body.appendChild(el));

        box.appendChild(header);
        box.appendChild(body);

        if (this.collapsedTodos.has(widget)) {
            box.classList.add('collapsed');
            header.setAttribute('aria-expanded', 'false');
        }
        box._onToggle = (collapsed) => {
            if (collapsed) this.collapsedTodos.add(widget);
            else this.collapsedTodos.delete(widget);
        };
        NoteBox.bind(box, header);
        return box;
    },

    toggleMinimize(idx) {
        State.widgets[idx].min = !State.widgets[idx].min;
        this.render();
    },

    updateNote(idx, value) {
        State.widgets[idx].content = value;
        Storage.saveWidgets(State.widgets);
    },

    addTask(e, idx) {
        if (e.key !== 'Enter' || !e.target.value.trim()) return;
        State.widgets[idx].tasks.push({ t: e.target.value.trim(), d: false });
        e.target.value = '';
        this.render();
    },

    toggleTask(idx, ti) {
        State.widgets[idx].tasks[ti].d = !State.widgets[idx].tasks[ti].d;
        this.render();
    },

    // Edita el texto de una tarea en el sitio: Enter guarda, Esc cancela
    startEditTask(item, textEl, idx, ti) {
        const task = State.widgets[idx].tasks[ti];
        const input = DomUtils.createEl('input', {
            class: 'todo-in todo-edit',
            attrs: { type: 'text', 'aria-label': 'Editar tarea' }
        });
        input.value = task.t;
        item.replaceChild(input, textEl);
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);

        let finished = false;
        const finish = (save) => {
            if (finished) return;
            finished = true;
            const value = input.value.trim();
            if (save && value) task.t = value;
            this.render();
        };
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') finish(true);
            else if (e.key === 'Escape') finish(false);
        });
        input.addEventListener('blur', () => finish(true));
    },

    deleteTask(idx, ti) {
        State.widgets[idx].tasks.splice(ti, 1);
        this.render();
    },

    editTitle(idx) {
        const newTitle = prompt("Nuevo título:", State.widgets[idx].title);
        if (!newTitle || !newTitle.trim()) return;
        State.widgets[idx].title = newTitle.toUpperCase();
        this.render();
    },

    delete(idx) {
        if (!confirm("¿Eliminar este bloque?")) return;
        State.widgets.splice(idx, 1);
        this.render();
    },

    create(type) {
        const title = prompt("Título del bloque:");
        if (!title || !title.trim()) return;
        State.widgets.push({
            type,
            title: title.toUpperCase(),
            content: '',
            tasks: [],
            min: false
        });
        this.render();
    }
};

// ============================================
// FUNCIONES DE NOTAS RÁPIDAS
// ============================================

const QuickNotes = {
    init() {
        const area = DomUtils.getById('quick-note-area');
        area.value = Storage.loadQuickNote();
        if (area.dataset.auto === '1') FieldSizes.fit(area);

        DomUtils.getById('btn-copy-note').addEventListener('click', () => this.copy());
        DomUtils.getById('btn-clear-note').addEventListener('click', () => this.clear());
        area.addEventListener('input', (e) => this.save(e.target.value));
    },

    save(value) {
        Storage.saveQuickNote(value);
    },

    copy() {
        const area = DomUtils.getById('quick-note-area');
        if (!area.value.trim()) return;
        navigator.clipboard.writeText(area.value).then(() => {
            alert('📋 ¡Nota copiada al portapapeles!');
        });
    },

    clear() {
        if (!confirm('¿Limpiar el bloc de notas?')) return;
        const area = DomUtils.getById('quick-note-area');
        area.value = '';
        this.save('');
        if (area.dataset.auto === '1') FieldSizes.fit(area);
    }
};

// ============================================
// FUNCIONES DE GESTOR DE TRABAJO
// ============================================

const TaskManager = {
    initFormHandlers() {
        const form = DomUtils.getById('main-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addItem();
        });

        // Event delegation para selectores
        DomUtils.getById('sel-quarter').addEventListener('click', (e) => {
            if (e.target.classList.contains('clickable-option')) {
                const quarter = parseInt(e.target.dataset.quarter);
                this.changeQuarter(quarter);
            }
        });

        DomUtils.getById('sel-type').addEventListener('click', (e) => {
            if (e.target.classList.contains('clickable-option')) {
                const type = e.target.dataset.type;
                this.changeType(type);
            }
        });

        DomUtils.getById('sel-role').addEventListener('click', (e) => {
            if (e.target.classList.contains('clickable-option')) {
                const role = e.target.dataset.role;
                this.changeRole(role);
            }
        });

        DomUtils.getById('ins-date').addEventListener('change', () => this.syncRemoteFromDate());
    },

    getSelectedDate() {
        const input = DomUtils.getById('ins-date').value;
        return input || Formatters.getLocalTodayISO();
    },

    setTodayDate() {
        DomUtils.getById('ins-date').value = Formatters.getLocalTodayISO();
        this.syncRemoteFromDate();
    },

    setDefaultQuarter() {
        const quarter = Math.floor(new Date().getMonth() / 3) + 1;
        State.currentQuarter = quarter;
        this.updateSelectorUI('sel-quarter', quarter - 1);
    },

    isDateRemote(dateVal) {
        return State.database.some(item => item.date === dateVal && item.remote === true);
    },

    setRemoteDayFlag(dateVal, isRemote) {
        let changed = false;
        State.database.forEach(item => {
            if (item.date === dateVal && item.remote !== isRemote) {
                item.remote = isRemote;
                changed = true;
            }
        });
        if (changed) Storage.saveDatabase(State.database);
        return changed;
    },

    syncRemoteFromDate() {
        const checkbox = DomUtils.getById('ins-remote');
        checkbox.checked = this.isDateRemote(this.getSelectedDate());
    },

    updateRemoteFromToggle() {
        const dateVal = this.getSelectedDate();
        const isRemote = DomUtils.getById('ins-remote').checked;
        if (this.setRemoteDayFlag(dateVal, isRemote)) {
            this.renderAll();
        }
    },

    changeQuarter(q) {
        State.currentQuarter = q;
        this.updateSelectorUI('sel-quarter', q - 1);
        this.renderAll();
    },

    changeType(type) {
        State.currentType = type;
        const types = ['incidencia', 'peticion', 'explotacion'];
        this.updateSelectorUI('sel-type', types.indexOf(type));
        State.currentRole = (type === 'explotacion') ? 'intervenida' : 'generada';
        this.renderRoleSelectors();
    },

    changeRole(role) {
        State.currentRole = role;
        const roles = (State.currentType === 'explotacion') ? ['intervenida'] : ['generada', 'participada', 'revisada'];
        this.updateSelectorUI('sel-role', roles.indexOf(role));
    },

    updateSelectorUI(containerId, index) {
        const btns = DomUtils.queryAll(`#${containerId} .clickable-option`);
        btns.forEach((b, i) => b.classList.toggle('active', i === index));
    },

    renderRoleSelectors() {
        const container = DomUtils.getById('sel-role');
        container.innerHTML = '';

        if (State.currentType === 'explotacion') {
            const btn = DomUtils.createEl('button', {
                class: 'clickable-option active',
                text: 'Intervenida',
                attrs: { 'data-role': 'intervenida', type: 'button' }
            });
            container.appendChild(btn);
        } else {
            const roles = ['generada', 'participada', 'revisada'];
            const labels = { generada: 'Generada', participada: 'Participada', revisada: 'Revisada' };
            roles.forEach(role => {
                const btn = DomUtils.createEl('button', {
                    class: `clickable-option ${State.currentRole === role ? 'active' : ''}`,
                    text: labels[role],
                    attrs: { 'data-role': role, type: 'button' }
                });
                container.appendChild(btn);
            });
        }
    },

    addItem() {
        const dateVal = this.getSelectedDate();
        const descVal = DomUtils.getById('ins-desc').value.trim() || "-";
        const idVal = DomUtils.getById('ins-id').value.trim() || "-";
        const isRemote = DomUtils.getById('ins-remote').checked;

        if (!Validators.isValidDate(dateVal)) {
            alert('Fecha no válida');
            return;
        }

        this.setRemoteDayFlag(dateVal, isRemote);

        const item = {
            id_key: Date.now().toString(),
            date: dateVal,
            type: State.currentType,
            role: State.currentRole,
            ticket: idVal,
            desc: descVal,
            remote: isRemote
        };

        State.database.push(item);
        Storage.saveDatabase(State.database);

        DomUtils.getById('ins-id').value = "";
        DomUtils.getById('ins-desc').value = "";
        this.setTodayDate();
        DomUtils.getById('ins-desc').focus();
        this.renderAll();
    },

    deleteItem(idKey) {
        if (!confirm("¿Eliminar esta actuación?")) return;
        State.database = State.database.filter(item => item.id_key !== idKey);
        Storage.saveDatabase(State.database);
        this.renderAll();
        this.syncRemoteFromDate();
    },

    cloneItem(idKey) {
        const item = State.database.find(i => i.id_key === idKey);
        if (!item) return;
        const todayStr = Formatters.getLocalTodayISO();
        const clone = {
            id_key: Date.now().toString(),
            date: todayStr,
            type: item.type,
            role: item.role,
            ticket: item.ticket,
            desc: item.desc,
            remote: item.remote
        };
        this.setRemoteDayFlag(todayStr, clone.remote);
        State.database.push(clone);
        Storage.saveDatabase(State.database);
        this.renderAll();
        this.syncRemoteFromDate();
    },

    compareItems(a, b) {
        const dateA = new Date((a.date || '1970-01-01') + 'T00:00:00').getTime() || 0;
        const dateB = new Date((b.date || '1970-01-01') + 'T00:00:00').getTime() || 0;
        if (dateB !== dateA) return dateB - dateA;
        return (Number(b.id_key) || 0) - (Number(a.id_key) || 0);
    },

    renderAll() {
        const tbody = document.querySelector('#table-body-zone tbody');
        tbody.innerHTML = "";

        const targetNums = State.quarterMonths[State.currentQuarter].nums;
        const currentYear = new Date().getFullYear().toString();

        const filtered = State.database.filter(item => {
            const parts = item.date.split('-');
            return parts[0] === currentYear && targetNums.includes(parseInt(parts[1]));
        });

        DomUtils.setText(DomUtils.getById('records-count'),
            `${filtered.length} ${filtered.length === 1 ? 'actuación' : 'actuaciones'}`);

        if (filtered.length === 0) {
            const tr = DomUtils.createEl('tr');
            const td = DomUtils.createEl('td', {
                text: `No hay actuaciones grabadas en el Trimestre ${State.currentQuarter}.`,
                attrs: { colspan: '6', style: 'text-align:center; color:#64748b; padding:24px;' }
            });
            tr.appendChild(td);
            tbody.appendChild(tr);
            return;
        }

        filtered.sort((a, b) => this.compareItems(a, b));

        const dayCounts = filtered.reduce((acc, item) => {
            acc[item.date] = (acc[item.date] || 0) + 1;
            return acc;
        }, {});

        let currentDay = "";

        filtered.forEach(item => {
            if (item.date !== currentDay) {
                currentDay = item.date;
                const dayCount = dayCounts[item.date] || 0;
                const dayRemoteBadge = this.isDateRemote(item.date)
                    ? '<span class="day-remote-badge">TT</span>'
                    : '';

                const sep = DomUtils.createEl('tr', { class: 'day-separator' });
                sep.innerHTML = `
                    <td colspan="6">
                        <div class="day-separator-inner">
                            <span class="day-left"><span>${Formatters.formatDateLong(item.date)}</span>${dayRemoteBadge}</span>
                            <span class="day-count">${dayCount} ${dayCount === 1 ? 'actuación' : 'actuaciones'}</span>
                        </div>
                    </td>
                `;
                tbody.appendChild(sep);
            }

            const tr = DomUtils.createEl('tr', { class: 'record-row' });

            let shortType = 'inc';
            if (item.type === 'peticion') shortType = 'pet';
            else if (item.type === 'explotacion') shortType = 'exp';

            const typeLabel = shortType === 'inc' ? 'INC' : (shortType === 'pet' ? 'PET' : 'EXP');
            const displayRemoteSuffix = item.remote === true ? " (*)" : "";

            const td1 = DomUtils.createEl('td', { text: Formatters.formatDateDM(item.date) });

            const td2 = DomUtils.createEl('td');
            const badge = DomUtils.createEl('span', {
                class: `badge ${shortType}`,
                text: typeLabel
            });
            td2.appendChild(badge);

            const td3 = DomUtils.createEl('td');
            const roleSpan = DomUtils.createEl('span', {
                class: 'role-text',
                text: Formatters.getRoleLabel(item.role)
            });
            td3.appendChild(roleSpan);

            const td4 = DomUtils.createEl('td');
            const ticketStrong = DomUtils.createEl('strong', { text: item.ticket });
            td4.appendChild(ticketStrong);

            const td5 = DomUtils.createEl('td', { text: item.desc + displayRemoteSuffix });

            const td6 = DomUtils.createEl('td');
            const actionDiv = DomUtils.createEl('div', { class: 'action-cell' });

            const btnEdit = DomUtils.createEl('button', {
                class: 'btn-tbl-action',
                html: Icons.svg('pencil'),
                attrs: { title: 'Editar', type: 'button' }
            });
            btnEdit.addEventListener('click', () => EditModal.open(item.id_key));

            const btnClone = DomUtils.createEl('button', {
                class: 'btn-tbl-action',
                html: Icons.svg('copy'),
                attrs: { title: 'Clonar (fecha hoy)', type: 'button' }
            });
            btnClone.addEventListener('click', () => this.cloneItem(item.id_key));

            const btnDel = DomUtils.createEl('button', {
                class: 'btn-tbl-action btn-tbl-del',
                html: Icons.svg('trash'),
                attrs: { title: 'Eliminar', type: 'button' }
            });
            btnDel.addEventListener('click', () => this.deleteItem(item.id_key));

            actionDiv.appendChild(btnEdit);
            actionDiv.appendChild(btnClone);
            actionDiv.appendChild(btnDel);
            td6.appendChild(actionDiv);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            tbody.appendChild(tr);
        });
    }
};

// ============================================
// MODAL DE EDICIÓN
// ============================================

const EditModal = {
    init() {
        DomUtils.getById('btn-modal-cancel').addEventListener('click', () => this.close());
        DomUtils.getById('btn-modal-save').addEventListener('click', () => this.save());

        DomUtils.queryAll('#edit-type-row button').forEach(btn => {
            btn.addEventListener('click', () => this.setType(btn));
        });

        DomUtils.queryAll('#edit-role-row button').forEach(btn => {
            btn.addEventListener('click', () => this.setRole(btn));
        });
    },

    open(idKey) {
        const item = State.database.find(i => i.id_key === idKey);
        if (!item) return;

        State.editingItemId = idKey;
        DomUtils.getById('edit-date').value = item.date;
        DomUtils.getById('edit-ticket').value = item.ticket === '-' ? '' : item.ticket;
        DomUtils.getById('edit-desc').value = item.desc;
        DomUtils.getById('edit-remote').checked = !!item.remote;

        State.editType = item.type || 'incidencia';
        State.editRole = item.role || 'generada';

        DomUtils.queryAll('#edit-type-row button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === State.editType);
        });

        this.updateRoleButtons();
        DomUtils.getById('editModalOverlay').classList.add('open');
        DomUtils.getById('edit-desc').focus();
    },

    close() {
        DomUtils.getById('editModalOverlay').classList.remove('open');
        State.editingItemId = null;
    },

    setType(btn) {
        State.editType = btn.dataset.type;
        DomUtils.queryAll('#edit-type-row button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.updateRoleButtons();
    },

    updateRoleButtons() {
        const row = DomUtils.getById('edit-role-row');
        if (State.editType === 'explotacion') {
            State.editRole = 'intervenida';
            row.innerHTML = '<button type="button" data-role="intervenida" class="active">Intervenida</button>';
        } else {
            const roles = ['generada', 'participada', 'revisada'];
            const labels = { generada: 'Generada', participada: 'Participada', revisada: 'Revisada' };
            if (roles.indexOf(State.editRole) === -1) State.editRole = 'generada';

            row.innerHTML = '';
            roles.forEach(role => {
                const btn = DomUtils.createEl('button', {
                    class: `${State.editRole === role ? 'active' : ''}`,
                    text: labels[role],
                    attrs: { 'data-role': role, type: 'button' }
                });
                row.appendChild(btn);
            });
        }

        DomUtils.queryAll('#edit-role-row button').forEach(btn => {
            btn.addEventListener('click', () => this.setRole(btn));
        });
    },

    setRole(btn) {
        State.editRole = btn.dataset.role;
        DomUtils.queryAll('#edit-role-row button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    },

    save() {
        if (!State.editingItemId) return;
        const idx = State.database.findIndex(i => i.id_key === State.editingItemId);
        if (idx === -1) return;

        const newDate = DomUtils.getById('edit-date').value;
        if (!Validators.isValidDate(newDate)) {
            alert('La fecha es obligatoria y debe ser válida.');
            return;
        }

        const newTicket = DomUtils.getById('edit-ticket').value.trim() || '-';
        const newDesc = DomUtils.getById('edit-desc').value.trim() || '-';
        const newRemote = DomUtils.getById('edit-remote').checked;

        State.database[idx].date = newDate;
        State.database[idx].type = State.editType;
        State.database[idx].role = State.editRole;
        State.database[idx].ticket = newTicket;
        State.database[idx].desc = newDesc;
        State.database[idx].remote = newRemote;

        TaskManager.setRemoteDayFlag(newDate, newRemote);
        Storage.saveDatabase(State.database);
        this.close();
        TaskManager.renderAll();
        TaskManager.syncRemoteFromDate();
    }
};

// ============================================
// IMPRESIÓN Y REPORTES
// ============================================

const PrintManager = {
    // Gráfica de barras al 100 % con el reparto generadas / participadas / revisadas por tipo.
    // Usa exactamente los mismos totales que el cuadro de indicadores.
    buildParticipationChart(counts) {
        const sum = (type, role) => ['m1', 'm2', 'm3'].reduce((acc, m) => acc + counts[m][type + role], 0);
        const types = [
            { label: 'Incidencias', key: 'inc' },
            { label: 'Peticiones', key: 'pet' }
        ];
        const roles = [
            { label: 'Generadas', key: 'G', fill: '#1f3a5f', text: '#fff' },
            { label: 'Participadas', key: 'P', fill: '#6f87aa', text: '#fff' },
            { label: 'Revisadas', key: 'R', fill: '#c3d0e2', text: '#111' }
        ];
        const width = 700, x0 = 118, barW = width - x0 - 1, rowH = 30, gap = 14;
        let y = 6;
        let svg = '';

        types.forEach(type => {
            const values = roles.map(role => sum(type.key, role.key));
            const total = values.reduce((a, b) => a + b, 0);
            svg += `<text x="${x0 - 10}" y="${y + 13}" font-size="11.5" font-weight="600" text-anchor="end" fill="#222">${type.label}</text>`
                + `<text x="${x0 - 10}" y="${y + 25}" font-size="9" text-anchor="end" fill="#555">${total} en total</text>`;
            if (total === 0) {
                svg += `<rect x="${x0}" y="${y}" width="${barW}" height="${rowH}" fill="none" stroke="#7f8ea3" stroke-dasharray="4 3"/>`
                    + `<text x="${x0 + barW / 2}" y="${y + 19}" font-size="10.5" font-style="italic" text-anchor="middle" fill="#666">sin registros</text>`;
            } else {
                let x = x0;
                values.forEach((value, i) => {
                    if (!value) return;
                    const w = barW * value / total;
                    svg += `<rect x="${x}" y="${y}" width="${w}" height="${rowH}" fill="${roles[i].fill}" stroke="#1f3a5f" stroke-width="0.8"/>`
                        + `<text x="${x + w / 2}" y="${y + 19}" font-size="11" font-weight="700" text-anchor="middle" fill="${roles[i].text}">${value}</text>`;
                    x += w;
                });
            }
            y += rowH + gap;
        });

        roles.forEach((role, i) => {
            svg += `<rect x="${x0 + i * 120}" y="${y + 2}" width="12" height="12" fill="${role.fill}" stroke="#1f3a5f" stroke-width="0.8"/>`
                + `<text x="${x0 + i * 120 + 17}" y="${y + 12}" font-size="10.5" fill="#333">${role.label}</text>`;
        });
        const height = y + 20;

        return `<h3 class="rp-subtitle">Participación por tipo</h3>`
            + `<svg viewBox="0 0 ${width} ${height}" width="100%" role="img" font-family="'Segoe UI', Arial, sans-serif">${svg}</svg>`
            + `<p class="rp-note">Reparto de incidencias y peticiones entre generadas, participadas y revisadas (cada barra es el 100 % de su tipo; a la izquierda, el total de cada tipo).</p>`;
    },

    generate(showDetails = true) {
        const cfgWorker = ReportConfig.get('worker');
        const currentYear = new Date().getFullYear().toString();
        const infoQuarter = State.quarterMonths[State.currentQuarter];

        DomUtils.setText(DomUtils.getById('prnt-worker'), cfgWorker);
        DomUtils.setText(DomUtils.getById('prnt-unit'), ReportConfig.get('unit'));
        DomUtils.setText(DomUtils.getById('prnt-period'),
            `TRIMESTRE ${State.currentQuarter} (${infoQuarter.names[0]} - ${infoQuarter.names[2]} ${currentYear})`);
        DomUtils.setText(DomUtils.getById('p-m1'), infoQuarter.names[0]);
        DomUtils.setText(DomUtils.getById('p-m2'), infoQuarter.names[1]);
        DomUtils.setText(DomUtils.getById('p-m3'), infoQuarter.names[2]);

        let counts = {
            m1: { incG: 0, incP: 0, incR: 0, petG: 0, petP: 0, petR: 0, tar: 0 },
            m2: { incG: 0, incP: 0, incR: 0, petG: 0, petP: 0, petR: 0, tar: 0 },
            m3: { incG: 0, incP: 0, incR: 0, petG: 0, petP: 0, petR: 0, tar: 0 }
        };

        let activeQuarterItems = [];

        State.database.forEach(item => {
            const parts = item.date.split('-');
            if (parts[0] !== currentYear) return;

            const mNum = parseInt(parts[1]);
            let mKey = "";
            if (mNum === infoQuarter.nums[0]) mKey = "m1";
            else if (mNum === infoQuarter.nums[1]) mKey = "m2";
            else if (mNum === infoQuarter.nums[2]) mKey = "m3";

            if (!mKey) return;
            activeQuarterItems.push(item);

            if (item.type === 'incidencia') {
                if (item.role === 'generada') counts[mKey].incG++;
                else if (item.role === 'revisada') counts[mKey].incR++;
                else counts[mKey].incP++;
            } else if (item.type === 'peticion') {
                if (item.role === 'generada') counts[mKey].petG++;
                else if (item.role === 'revisada') counts[mKey].petR++;
                else counts[mKey].petP++;
            } else if (item.type === 'explotacion') {
                counts[mKey].tar++;
            }
        });

        for (let i = 1; i <= 3; i++) {
            const k = "m" + i;
            DomUtils.setText(DomUtils.getById(`c-m${i}-inc-g`), counts[k].incG.toString());
            DomUtils.setText(DomUtils.getById(`c-m${i}-inc-p`), counts[k].incP.toString());
            DomUtils.setText(DomUtils.getById(`c-m${i}-inc-r`), counts[k].incR.toString());
            DomUtils.setText(DomUtils.getById(`c-m${i}-pet-g`), counts[k].petG.toString());
            DomUtils.setText(DomUtils.getById(`c-m${i}-pet-p`), counts[k].petP.toString());
            DomUtils.setText(DomUtils.getById(`c-m${i}-pet-r`), counts[k].petR.toString());
            DomUtils.setText(DomUtils.getById(`c-m${i}-tar`), counts[k].tar.toString());
        }

        DomUtils.setText(DomUtils.getById('c-tot-inc-g'),
            (counts.m1.incG + counts.m2.incG + counts.m3.incG).toString());
        DomUtils.setText(DomUtils.getById('c-tot-inc-p'),
            (counts.m1.incP + counts.m2.incP + counts.m3.incP).toString());
        DomUtils.setText(DomUtils.getById('c-tot-inc-r'),
            (counts.m1.incR + counts.m2.incR + counts.m3.incR).toString());
        DomUtils.setText(DomUtils.getById('c-tot-pet-g'),
            (counts.m1.petG + counts.m2.petG + counts.m3.petG).toString());
        DomUtils.setText(DomUtils.getById('c-tot-pet-p'),
            (counts.m1.petP + counts.m2.petP + counts.m3.petP).toString());
        DomUtils.setText(DomUtils.getById('c-tot-pet-r'),
            (counts.m1.petR + counts.m2.petR + counts.m3.petR).toString());
        DomUtils.setText(DomUtils.getById('c-tot-tar'),
            (counts.m1.tar + counts.m2.tar + counts.m3.tar).toString());

        DomUtils.getById('rp-chart').innerHTML = this.buildParticipationChart(counts);

        // Resumen del periodo (se calcula con los mismos datos que el cuadro de indicadores)
        const totalInc = counts.m1.incG + counts.m1.incP + counts.m1.incR + counts.m2.incG + counts.m2.incP + counts.m2.incR + counts.m3.incG + counts.m3.incP + counts.m3.incR;
        const totalPet = counts.m1.petG + counts.m1.petP + counts.m1.petR + counts.m2.petG + counts.m2.petP + counts.m2.petR + counts.m3.petG + counts.m3.petP + counts.m3.petR;
        const totalTar = counts.m1.tar + counts.m2.tar + counts.m3.tar;
        const activeDays = new Set(activeQuarterItems.map(item => item.date));
        const remoteDays = new Set(activeQuarterItems.filter(item => item.remote === true).map(item => item.date));
        DomUtils.setText(DomUtils.getById('rp-total'), activeQuarterItems.length.toString());
        DomUtils.setText(DomUtils.getById('rp-inc'), totalInc.toString());
        DomUtils.setText(DomUtils.getById('rp-pet'), totalPet.toString());
        DomUtils.setText(DomUtils.getById('rp-tar'), totalTar.toString());
        DomUtils.setText(DomUtils.getById('rp-tt'), `${remoteDays.size} / ${activeDays.size}`);

        const detailTitle = DomUtils.getById('print-detail-title');
        const tableZone = DomUtils.getById('print-table-zone');
        detailTitle.style.display = showDetails ? 'block' : 'none';
        tableZone.style.display = showDetails ? 'block' : 'none';
        tableZone.innerHTML = "";

        if (showDetails) {
            DomUtils.setText(detailTitle, `2. Desglose justificativo detallado (${activeQuarterItems.length} ${activeQuarterItems.length === 1 ? 'actuación' : 'actuaciones'})`);
            if (activeQuarterItems.length === 0) {
                tableZone.innerHTML = `<p class="rp-empty">No hay actuaciones detalladas registradas en este trimestre.</p>`;
            } else {
                activeQuarterItems.sort((a, b) => TaskManager.compareItems(a, b));
                let html = `
                    <table class="rp-table rp-detail">
                        <thead>
                            <tr>
                                <th class="c-date">Fecha</th>
                                <th class="c-type">Tipo</th>
                                <th class="c-role">Particip.</th>
                                <th class="c-id">ID</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                `;

                activeQuarterItems.forEach(item => {
                    let displayType = "Incidencia";
                    if (item.type === 'peticion') displayType = "Petición";
                    else if (item.type === 'explotacion') displayType = "Explotación";

                    const displayRole = Formatters.getRoleLabel(item.role);
                    const displayTicket = (item.ticket && item.ticket !== "-") ? item.ticket : "";
                    const finalDesc = item.remote === true ? `${item.desc} (*)` : item.desc;

                    html += `
                        <tr>
                            <td class="c-date">${Formatters.formatDateDMY(item.date)}</td>
                            <td class="c-type">${displayType}</td>
                            <td class="c-role">${displayRole}</td>
                            <td class="c-id">${Validators.sanitizeText(displayTicket)}</td>
                            <td>${Validators.sanitizeText(finalDesc)}</td>
                        </tr>
                    `;
                });

                html += `</tbody></table>
                    <p class="rp-note"><strong>GEN</strong> generada · <strong>PART</strong> participada · <strong>REV</strong> revisada · <strong>INT</strong> intervenida. <strong>(*)</strong> Actuación realizada en teletrabajo.</p>`;
                tableZone.innerHTML = html;
            }
        }

        const today = new Date();
        const monthName = today.toLocaleString('es-ES', { month: 'long' });
        DomUtils.setText(DomUtils.getById('print-signature-date'),
            `${ReportConfig.get('place') ? 'En ' + ReportConfig.get('place') + ', a' : 'A'} ${today.getDate()} de ${monthName} de ${today.getFullYear()}.`);

        window.print();
    }
};

// ============================================
// BACKUP Y PERSISTENCIA
// ============================================

const Backup = {
    exportFull() {
        const backupObject = {
            version: "panel-tecnico-v2",
            app_version: APP_VERSION,
            timestamp: new Date().toISOString(),
            links: State.linkData,
            widgets: State.widgets,
            quick_note: Storage.loadQuickNote(),
            telework_db: State.database,
            telework_worker_cfg: localStorage.getItem('telework_worker_cfg') || '',
            telework_unit_cfg: localStorage.getItem('telework_unit_cfg') || '',
            telework_place_cfg: localStorage.getItem('telework_place_cfg') || ''
        };

        const blob = new Blob([JSON.stringify(backupObject, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `backup_panel_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
    },

    exportGestor() {
        if (State.database.length === 0) {
            alert("No hay actuaciones para exportar.");
            return;
        }

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(State.database, null, 2));
        const a = document.createElement('a');
        a.href = dataStr;
        a.download = `copia_seguridad_teletrabajo_${new Date().getFullYear()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    },

    import(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                let imported = false;

                if (data.links && data.widgets) {
                    State.linkData = data.links;
                    State.widgets = data.widgets;
                    State.widgets.forEach(widget => {
                        if (widget.type === 'todo') widget.min = false;
                    });
                    Storage.saveLinks(State.linkData);
                    Storage.saveWidgets(State.widgets);
                    imported = true;
                }

                if (data.quick_note !== undefined) {
                    Storage.saveQuickNote(data.quick_note);
                    QuickNotes.init();
                }

                if (data.telework_db && Array.isArray(data.telework_db)) {
                    State.database = data.telework_db;
                    Storage.saveDatabase(State.database);
                    imported = true;
                }

                ['telework_worker_cfg', 'telework_unit_cfg', 'telework_place_cfg'].forEach(key => {
                    if (data[key]) localStorage.setItem(key, data[key]);
                });

                if (Array.isArray(data) && !data.links) {
                    State.database = data;
                    Storage.saveDatabase(State.database);
                    imported = true;
                }

                if (imported) {
                    LinksManager.render();
                    WidgetsManager.render();
                    TaskManager.renderAll();
                    TaskManager.syncRemoteFromDate();
                    alert("✅ Backup importado correctamente!");
                } else {
                    alert("Formato de backup no reconocido.");
                }
            } catch (err) {
                alert("Error al leer el archivo: " + err.message);
            }
        };

        reader.readAsText(file);
        event.target.value = "";
    }
};

// ============================================
// MODAL DE CONFIRMACIÓN DESTRUCTIVA
// ============================================

const DangerModal = {
    pending: null,

    show(title, message, callback) {
        this.pending = callback;
        DomUtils.setText(DomUtils.getById('danger-message'), message);
        DomUtils.getById('dangerModal').classList.add('open');
    },

    close() {
        DomUtils.getById('dangerModal').classList.remove('open');
        this.pending = null;
    },

    confirm() {
        if (this.pending) this.pending();
        this.close();
    },

    init() {
        DomUtils.getById('btn-danger-cancel').addEventListener('click', () => this.close());
        DomUtils.getById('btn-danger-confirm').addEventListener('click', () => this.confirm());
        DomUtils.getById('dangerModal').addEventListener('click', (e) => {
            if (e.target.id === 'dangerModal') this.close();
        });
    }
};

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

const Utils = {
    toggleCollapsible(headerId, contentId, iconId, key) {
        const header = DomUtils.getById(headerId);
        const content = DomUtils.getById(contentId);
        const icon = DomUtils.getById(iconId);
        const stateKey = 'gob_ui_collapsed_v1';

        const readState = () => {
            try {
                return JSON.parse(localStorage.getItem(stateKey)) || {};
            } catch {
                return {};
            }
        };

        icon.innerHTML = Icons.svg('chev');
        const setCollapsed = (collapsed) => {
            content.classList.toggle('collapsed', collapsed);
            icon.classList.toggle('is-collapsed', collapsed);
            header.setAttribute('aria-expanded', String(!collapsed));
        };

        setCollapsed(content.classList.contains('collapsed'));

        const saved = readState();
        if (typeof saved[key] === 'boolean') setCollapsed(saved[key]);

        header.addEventListener('click', () => {
            const collapsed = !content.classList.contains('collapsed');
            setCollapsed(collapsed);
            const state = readState();
            state[key] = collapsed;
            localStorage.setItem(stateKey, JSON.stringify(state));
        });
    },

    clearQuarter() {
        const message = `Esto eliminará todos los registros del Trimestre ${State.currentQuarter} del año actual. Los datos se perderán permanentemente.`;
        DangerModal.show('Borrar Trimestre', message, () => {
            const targetNums = State.quarterMonths[State.currentQuarter].nums;
            const currentYear = new Date().getFullYear().toString();

            State.database = State.database.filter(item => {
                const parts = item.date.split('-');
                return !(parts[0] === currentYear && targetNums.includes(parseInt(parts[1])));
            });

            Storage.saveDatabase(State.database);
            TaskManager.renderAll();
            TaskManager.syncRemoteFromDate();
            alert('✅ Datos del trimestre eliminados');
        });
    },

    resetAll() {
        const message = 'Esto eliminará TODOS tus datos (actuaciones, notas, enlaces, listas). Esta acción es completamente irreversible.';
        DangerModal.show('Limpiar Todo', message, () => {
            localStorage.clear();
            alert('✅ Sistema limpió. Recargando...');
            location.reload();
        });
    },

    resetLayout() {
        Layout.reset();
    }
};

// ============================================
// TAMAÑO DE CAMPOS AMPLIADOS (se recuerda entre sesiones)
// ============================================

const FieldSizes = {
    QUICK_KEY: 'gob_quick_note_h',

    // Ajusta un textarea a la altura de su texto
    fit(textarea) {
        if (!textarea.offsetParent) return; // oculto: se ajusta al mostrarse
        textarea.style.height = 'auto';
        const extra = textarea.offsetHeight - textarea.clientHeight;
        textarea.style.height = (textarea.scrollHeight + extra) + 'px';
    },

    fitAll() {
        DomUtils.queryAll('textarea[data-auto="1"]').forEach(t => this.fit(t));
    },

    // Avisa con la nueva altura solo cuando el usuario arrastra la esquina inferior derecha.
    // Los cambios de contenido o de ancho (columnas) no cuentan como ajuste manual.
    observe(el, onManual) {
        el.addEventListener('pointerdown', (e) => {
            const rect = el.getBoundingClientRect();
            if (e.clientX < rect.right - 26 || e.clientY < rect.bottom - 26) return;
            const startH = Math.round(rect.height);
            window.addEventListener('pointerup', () => {
                if (!el.offsetParent) return;
                const h = Math.round(el.getBoundingClientRect().height);
                if (h > 0 && Math.abs(h - startH) >= 2) onManual(h);
            }, { once: true });
        });

        // Si cambia el ancho, los campos automáticos se reajustan al texto
        if (window.ResizeObserver && el.tagName === 'TEXTAREA') {
            let lastW = null;
            new ResizeObserver(() => {
                if (!el.offsetParent) return;
                const w = Math.round(el.getBoundingClientRect().width);
                if (lastW !== null && w !== lastW && el.dataset.auto === '1') this.fit(el);
                lastW = w;
            }).observe(el);
        }
    },

    initQuickNote() {
        NoteBox.bind(DomUtils.getById('quick-note-box'), DomUtils.getById('quick-note-header'), () => this.fitAll());
        const area = DomUtils.getById('quick-note-area');
        const saved = parseInt(localStorage.getItem(this.QUICK_KEY), 10);
        if (saved > 0) {
            area.style.height = saved + 'px';
        } else {
            area.dataset.auto = '1';
            this.fit(area);
        }
        area.addEventListener('input', () => {
            if (area.dataset.auto === '1') this.fit(area);
        });
        this.observe(area, (h) => {
            delete area.dataset.auto;
            localStorage.setItem(this.QUICK_KEY, String(h));
        });
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => this.fitAll());
    },

    reset() {
        localStorage.removeItem(this.QUICK_KEY);
        const area = DomUtils.getById('quick-note-area');
        area.dataset.auto = '1';
        this.fit(area);
        State.widgets.forEach(widget => delete widget.h);
        WidgetsManager.render();
    }
};

// ============================================
// APARTADOS VISIBLES Y ANCHO DE COLUMNAS
// ============================================

const Layout = {
    PANELS_KEY: 'gob_panels_v1',
    PANELS: ['links', 'gestor', 'widgets'],
    DEFAULT_WIDTHS: { wLinks: '40%', wWidgets: '24%' },
    visible: { links: true, gestor: true, widgets: true },
    widths: { wLinks: '40%', wWidgets: '24%' },
    drag: null,

    init() {
        this.els = {
            links: DomUtils.getById('colLinks'),
            gestor: DomUtils.getById('colGestor'),
            widgets: DomUtils.getById('colWidgets')
        };
        this.resizer1 = DomUtils.getById('resizer1');
        this.resizer2 = DomUtils.getById('resizer2');
        this.container = DomUtils.getById('workspaceContainer');

        try {
            const savedPanels = JSON.parse(localStorage.getItem(this.PANELS_KEY));
            if (savedPanels && this.PANELS.some(p => savedPanels[p])) {
                this.PANELS.forEach(p => {
                    if (typeof savedPanels[p] === 'boolean') this.visible[p] = savedPanels[p];
                });
            }
        } catch { /* valores por defecto */ }

        const savedWidths = Storage.loadColumnWidths();
        if (savedWidths && savedWidths.wLinks && savedWidths.wWidgets) {
            this.widths = { wLinks: savedWidths.wLinks, wWidgets: savedWidths.wWidgets };
        }

        DomUtils.queryAll('[data-panel-toggle]').forEach(btn => {
            btn.addEventListener('click', () => this.toggle(btn.dataset.panelToggle));
        });

        this.resizer1.addEventListener('mousedown', () => this.startDrag('r1', this.resizer1));
        this.resizer2.addEventListener('mousedown', () => this.startDrag('r2', this.resizer2));
        window.addEventListener('mousemove', (e) => this.onMove(e));
        window.addEventListener('mouseup', () => this.endDrag());
        window.addEventListener('resize', () => this.apply());
        this.resizer1.addEventListener('dblclick', () => this.reset());
        this.resizer2.addEventListener('dblclick', () => this.reset());

        this.apply();
    },

    toggle(panel) {
        if (window.innerWidth <= 1080) {
            this.mobilePanel = panel;
            this.apply();
            return;
        }
        const next = { ...this.visible, [panel]: !this.visible[panel] };
        if (!this.PANELS.some(p => next[p])) return; // siempre queda uno visible
        this.visible = next;
        localStorage.setItem(this.PANELS_KEY, JSON.stringify(this.visible));
        this.apply();
        FieldSizes.fitAll();
    },

    // Reparte el espacio: el Gestor ocupa el sobrante; si está oculto, lo hace el primer panel visible
    apply() {
        const wide = window.innerWidth > 1080;
        const eff = wide ? this.visible : { links: false, gestor: false, widgets: false, [this.mobilePanel || 'gestor']: true };
        const shown = this.PANELS.filter(p => eff[p]);
        const flexPanel = this.visible.gestor ? 'gestor' : shown[0];

        this.PANELS.forEach(p => {
            const el = this.els[p];
            el.classList.toggle('panel-hidden', !eff[p]);
            if (!eff[p] || !wide) {
                el.style.width = '';
                el.style.flex = '';
            } else if (p === flexPanel) {
                el.style.width = '';
                el.style.flex = '1';
            } else {
                el.style.width = p === 'links' ? this.widths.wLinks : this.widths.wWidgets;
                el.style.flex = 'none';
            }
        });

        const v = this.visible;
        this.resizer1.classList.toggle('panel-hidden', !(v.links && (v.gestor || v.widgets)));
        this.resizer2.classList.toggle('panel-hidden', !(v.gestor && v.widgets));

        DomUtils.queryAll('[data-panel-toggle]').forEach(btn => {
            const on = eff[btn.dataset.panelToggle];
            btn.classList.toggle('active', on);
            btn.setAttribute('aria-pressed', String(on));
        });
    },

    startDrag(which, handle) {
        this.drag = { which, handle };
        handle.classList.add('is-dragging');
        document.body.style.cursor = 'col-resize';
    },

    onMove(e) {
        if (!this.drag) return;
        const rect = this.container.getBoundingClientRect();

        if (this.drag.which === 'r1') {
            if (this.visible.gestor) {
                const w = e.clientX - rect.left;
                if (w > 220 && w < rect.width - 500) this.widths.wLinks = w + 'px';
            } else {
                // Enlaces + Notas: el borde mueve el ancho de las notas
                const w = rect.right - e.clientX;
                if (w > 180 && w < rect.width - 300) this.widths.wWidgets = w + 'px';
            }
        } else {
            const w = rect.right - e.clientX;
            if (w > 180 && w < rect.width - 500) this.widths.wWidgets = w + 'px';
        }
        this.apply();
    },

    endDrag() {
        if (!this.drag) return;
        this.drag.handle.classList.remove('is-dragging');
        this.drag = null;
        document.body.style.cursor = '';
        Storage.saveColumnWidths(this.widths);
    },

    reset() {
        this.widths = { ...this.DEFAULT_WIDTHS };
        localStorage.removeItem('gob_column_widths_v2');
        this.apply();
        FieldSizes.reset();
    }
};

// ============================================
// TEMAS DE COLOR
// ============================================

const Theme = {
    KEY: 'gob_theme_v1',
    DEFAULT: 'dark',

    // Cada familia tiene versión oscura y clara: [id, nombre, color de fondo, color de acento].
    // Grafito solo existe en oscuro.
    FAMILIES: [
        { dark: ['dark', 'Noche', '#0f1419', '#3b82f6'], light: ['light', 'Claro', '#ffffff', '#2563eb'] },
        { dark: ['midnight', 'Medianoche', '#0c1230', '#6366f1'], light: ['midnight-light', 'Medianoche', '#ffffff', '#4f46e5'] },
        { dark: ['ocean', 'Océano', '#0a1e2e', '#0ea5e9'], light: ['ocean-light', 'Océano', '#ffffff', '#0e7490'] },
        { dark: ['sky-dark', 'Cielo', '#0d1e2e', '#38bdf8'], light: ['sky', 'Cielo', '#ffffff', '#0284c7'] },
        { dark: ['forest', 'Bosque', '#0b1b12', '#22c55e'], light: ['forest-light', 'Bosque', '#ffffff', '#15803d'] },
        { dark: ['mint-dark', 'Menta', '#0b1f1a', '#2dd4bf'], light: ['mint', 'Menta', '#ffffff', '#0d9488'] },
        { dark: ['sunset', 'Atardecer', '#1f130c', '#f97316'], light: ['sunset-light', 'Atardecer', '#ffffff', '#c2410c'] },
        { dark: ['violet', 'Violeta', '#150d24', '#a855f7'], light: ['violet-light', 'Violeta', '#ffffff', '#7e22ce'] },
        { dark: ['sakura-dark', 'Sakura', '#240b1b', '#f472b6'], light: ['sakura', 'Sakura', '#ffffff', '#db2777'] },
        { dark: ['ruby', 'Rubí', '#1c0b11', '#e11d48'], light: ['ruby-light', 'Rubí', '#ffffff', '#be123c'] },
        { dark: ['nord', 'Nord', '#2e3440', '#88c0d0'], light: ['nord-light', 'Nord', '#ffffff', '#506f99'] },
        { dark: ['dracula', 'Drácula', '#282a36', '#bd93f9'], light: ['dracula-light', 'Drácula', '#fffdf6', '#644ac9'] },
        { dark: ['solarized', 'Solarized', '#002b36', '#268bd2'], light: ['solarized-light', 'Solarized', '#fdf6e3', '#1f78b4'] },
        { dark: ['gruvbox', 'Gruvbox', '#282828', '#fabd2f'], light: ['gruvbox-light', 'Gruvbox', '#fbf1c7', '#9a6210'] },
        { dark: ['coffee', 'Café', '#1d1611', '#d4a373'], light: ['coffee-light', 'Café', '#fffaf4', '#8a5a2b'] },
        { dark: ['sand-dark', 'Arena', '#1e1810', '#f59e0b'], light: ['sand', 'Arena', '#fffdf8', '#b45309'] },
        { dark: ['slate', 'Pizarra', '#171b21', '#94a3b8'], light: ['slate-light', 'Pizarra', '#ffffff', '#475569'] },
        { dark: ['graphite', 'Grafito', '#141416', '#e4e4e7'], light: null }
    ],

    mode: 'dark',

    all() {
        return this.FAMILIES.flatMap(f => [f.dark, f.light].filter(Boolean));
    },

    familyOf(id) {
        return this.FAMILIES.find(f => (f.dark && f.dark[0] === id) || (f.light && f.light[0] === id));
    },

    modeOf(id) {
        const family = this.familyOf(id);
        return family && family.light && family.light[0] === id ? 'light' : 'dark';
    },

    build() {
        const container = DomUtils.getById('themeGrid');
        const mode = DomUtils.createEl('div', { class: 'theme-mode', attrs: { role: 'radiogroup', 'aria-label': 'Modo de color' } });
        [['dark', '🌙 Oscuro'], ['light', '☀️ Claro']].forEach(([value, label]) => {
            const btn = DomUtils.createEl('button', {
                class: 'theme-mode-btn',
                text: label,
                attrs: { type: 'button', role: 'radio', 'aria-checked': 'false', 'data-theme-mode': value }
            });
            btn.addEventListener('click', () => this.setMode(value));
            mode.appendChild(btn);
        });
        container.appendChild(mode);
        const grid = DomUtils.createEl('div', { class: 'theme-grid', id: 'themeOptions' });
        ['dark', 'light'].forEach(modeName => {
            this.FAMILIES.forEach(family => {
                const entry = family[modeName];
                if (!entry) return;
                const [id, name, sw1, sw2] = entry;
                const btn = DomUtils.createEl('button', {
                    class: 'theme-option',
                    attrs: {
                        type: 'button', role: 'radio', 'aria-checked': 'false',
                        'data-theme-option': id, 'data-theme-for': modeName, title: name
                    }
                });
                const sw = DomUtils.createEl('span', { class: 'theme-swatch', attrs: { 'aria-hidden': 'true' } });
                sw.style.setProperty('--sw1', sw1);
                sw.style.setProperty('--sw2', sw2);
                btn.appendChild(sw);
                btn.appendChild(DomUtils.createEl('span', { text: name }));
                btn.addEventListener('click', () => this.apply(id));
                grid.appendChild(btn);
            });
        });
        container.appendChild(grid);
    },

    // Todas las opciones existen siempre; solo se muestran las del modo activo
    renderOptions() {
        DomUtils.queryAll('[data-theme-option]').forEach(btn => {
            btn.hidden = btn.dataset.themeFor !== this.mode;
        });
    },

    // Cambia entre oscuro y claro conservando la familia de colores
    setMode(mode) {
        const current = document.documentElement.getAttribute('data-theme') || this.DEFAULT;
        const family = this.familyOf(current);
        const target = family && family[mode] ? family[mode][0] : (mode === 'light' ? 'light' : 'dark');
        this.apply(target);
    },

    init() {
        this.build();

        let saved = this.DEFAULT;
        try {
            saved = localStorage.getItem(this.KEY) || this.DEFAULT;
        } catch { /* tema por defecto */ }
        this.apply(saved, false);
    },

    apply(name, persist = true) {
        if (!this.all().some(t => t[0] === name)) name = this.DEFAULT;

        this.mode = this.modeOf(name);
        document.documentElement.setAttribute('data-theme', name);
        this.renderOptions();

        DomUtils.queryAll('[data-theme-option]').forEach(btn => {
            const on = btn.dataset.themeOption === name;
            btn.classList.toggle('active', on);
            btn.setAttribute('aria-checked', String(on));
        });
        DomUtils.queryAll('[data-theme-mode]').forEach(btn => {
            const on = btn.dataset.themeMode === this.mode;
            btn.classList.toggle('active', on);
            btn.setAttribute('aria-checked', String(on));
        });

        if (persist) {
            try {
                localStorage.setItem(this.KEY, name);
            } catch { /* sin almacenamiento */ }
        }
    }
};

// ============================================
// MENÚ "MÁS" (⋯)
// ============================================

const MoreMenu = {
    init() {
        const moreMenu = DomUtils.getById('dangerMenu');
        const btnMenu = DomUtils.getById('btn-menu-danger');
        const setMenu = (open) => {
            moreMenu.hidden = !open;
            btnMenu.setAttribute('aria-expanded', String(open));
        };

        btnMenu.addEventListener('click', () => setMenu(moreMenu.hidden));
        moreMenu.addEventListener('click', (e) => {
            if (e.target.closest('[data-menu-close]')) setMenu(false);
        });
        document.addEventListener('click', (e) => {
            if (!moreMenu.hidden && !btnMenu.contains(e.target) && !moreMenu.contains(e.target)) setMenu(false);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !moreMenu.hidden) {
                setMenu(false);
                btnMenu.focus();
            }
        });

        DomUtils.getById('btn-clear-quarter-menu').addEventListener('click', () => Utils.clearQuarter());
        DomUtils.getById('btn-reset-all-menu').addEventListener('click', () => Utils.resetAll());
    }
};

// ============================================
// INICIALIZACIÓN
// ============================================

// Un fallo en un componente no debe dejar sin funcionar al resto
const run = (fn) => {
    try {
        fn();
    } catch (err) {
        console.error(err);
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    // El menú "⋯" se activa primero, antes de cargar datos
    run(() => Icons.apply());
    run(() => MoreMenu.init());
    run(() => LinksManager.initModal());

    // Cargar estado global
    State.database = Storage.loadDatabase();
    State.linkData = Storage.loadLinks() || await Storage.loadDefaultLinks();
    State.widgets = Storage.loadWidgets();

    DomUtils.setText(DomUtils.getById('app-version'), 'v' + APP_VERSION);

    // Inicializar componentes
    run(() => LinksManager.render());
    run(() => WidgetsManager.render());
    run(() => QuickNotes.init());
    run(() => TaskManager.initFormHandlers());
    run(() => TaskManager.setTodayDate());
    run(() => TaskManager.setDefaultQuarter());
    run(() => TaskManager.renderRoleSelectors());
    run(() => TaskManager.renderAll());
    run(() => EditModal.init());
    run(() => Layout.init());
    run(() => Theme.init());
    run(() => FieldSizes.initQuickNote());

    // Inicializar modal destructivo
    DangerModal.init();

    run(() => {
        // Event listeners para botones globales
        DomUtils.getById('btn-save-backup').addEventListener('click', () => Backup.exportFull());
        DomUtils.getById('btn-load-backup').addEventListener('click', () =>
            DomUtils.getById('global-import-input').click());
        DomUtils.getById('global-import-input').addEventListener('change', (e) => Backup.import(e));
        DomUtils.getById('btn-new-note').addEventListener('click', () => WidgetsManager.create('note'));
        DomUtils.getById('btn-new-todo').addEventListener('click', () => WidgetsManager.create('todo'));
        DomUtils.getById('btn-reset-layout').addEventListener('click', () => Utils.resetLayout());
        DomUtils.getById('btn-reload').addEventListener('click', () => location.reload());
        DomUtils.getById('btn-report-config').addEventListener('click', () => ReportConfig.edit());

        // Event listeners para gestor
        DomUtils.getById('btn-export-json').addEventListener('click', () => Backup.exportGestor());
        DomUtils.getById('btn-print-summary').addEventListener('click', () => PrintManager.generate(false));
        DomUtils.getById('btn-print-full').addEventListener('click', () => PrintManager.generate(true));

        // Event listeners para modal
        DomUtils.getById('ins-remote').addEventListener('change', () => TaskManager.updateRemoteFromToggle());

        // Collapsibles
        Utils.toggleCollapsible('actuaciones-header', 'actuaciones-collapsible', 'actuaciones-toggle-icon', 'actuaciones');
        Utils.toggleCollapsible('tools-header', 'tools-collapsible', 'tools-toggle-icon', 'tools');

        // Modal overlay click
        DomUtils.getById('editModalOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'editModalOverlay') EditModal.close();
        });

        // Widget add button
    });
});
