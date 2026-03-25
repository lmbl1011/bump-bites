const DAILY_TARGETS = [
  { id: 'grainsOz', label: 'Grains', unit: 'oz', min: 6, max: 10 },
  { id: 'vegetablesCups', label: 'Vegetables', unit: 'cups', min: 2.5 },
  { id: 'fruitsCups', label: 'Fruits', unit: 'cups', min: 2 },
  { id: 'dairyCups', label: 'Dairy', unit: 'cups', min: 3 },
  { id: 'proteinFoodsOz', label: 'Protein foods', unit: 'oz', min: 5, max: 7 },
  { id: 'oilsTsp', label: 'Oils', unit: 'tsp', min: 6 },
  { id: 'calciumMg', label: 'Calcium', unit: 'mg', min: 1000, max: 2500 },
  { id: 'proteinG', label: 'Protein', unit: 'g', min: 75 },
  { id: 'ironMg', label: 'Iron', unit: 'mg', min: 27 }
];

const FOOD_LIBRARY = [
  { id: 'greek-yogurt', name: 'Greek yogurt', serving: '1 cup', mealType: 'Snack', ingredients: ['yogurt'], proteinG: 20, calciumMg: 250, ironMg: 0.1, dairyCups: 1 },
  { id: 'milk', name: 'Milk', serving: '1 cup', mealType: 'Snack', ingredients: ['milk'], proteinG: 8, calciumMg: 307, dairyCups: 1 },
  { id: 'fortified-oj', name: 'Orange juice with calcium', serving: '6 oz', mealType: 'Snack', ingredients: ['orange'], calciumMg: 262, fruitsCups: 0.75 },
  { id: 'cottage-cheese', name: 'Cottage cheese', serving: '1 cup', mealType: 'Snack', ingredients: ['cottage cheese'], proteinG: 25, calciumMg: 140, dairyCups: 1 },
  { id: 'cheese-stick', name: 'Cheese stick', serving: '1 stick', mealType: 'Snack', ingredients: ['cheese'], proteinG: 7, calciumMg: 180, dairyCups: 0.5 },
  { id: 'mozzarella', name: 'Mozzarella cheese', serving: '1 oz', mealType: 'Snack', ingredients: ['cheese'], proteinG: 7, calciumMg: 196, dairyCups: 0.5 },
  { id: 'egg', name: 'Egg', serving: '1 egg', mealType: 'Breakfast', ingredients: ['egg'], proteinG: 6, ironMg: 0.6, proteinFoodsOz: 1 },
  { id: 'eggs-two', name: 'Eggs', serving: '2 eggs', mealType: 'Breakfast', ingredients: ['egg'], proteinG: 12, ironMg: 1.2, proteinFoodsOz: 2 },
  { id: 'chicken', name: 'Chicken breast', serving: '3 oz', mealType: 'Lunch', ingredients: ['chicken'], proteinG: 24, ironMg: 1, proteinFoodsOz: 3 },
  { id: 'salmon', name: 'Salmon', serving: '3 oz', mealType: 'Dinner', ingredients: ['salmon'], proteinG: 15, calciumMg: 20, ironMg: 0.5, proteinFoodsOz: 3 },
  { id: 'lean-beef', name: 'Lean beef', serving: '3 oz', mealType: 'Dinner', ingredients: ['beef'], proteinG: 22, ironMg: 2, proteinFoodsOz: 3 },
  { id: 'tofu', name: 'Firm tofu', serving: '1/2 cup', mealType: 'Lunch', ingredients: ['tofu'], proteinG: 10, ironMg: 3, calciumMg: 150, proteinFoodsOz: 2 },
  { id: 'soybeans', name: 'Soybeans', serving: '1 cup', mealType: 'Lunch', ingredients: ['soybeans'], proteinG: 16, ironMg: 9, proteinFoodsOz: 4 },
  { id: 'peanut-butter', name: 'Peanut butter', serving: '1 tbsp', mealType: 'Snack', ingredients: ['peanut butter'], proteinG: 4, ironMg: 0.3, proteinFoodsOz: 1, oilsTsp: 2 },
  { id: 'oatmeal', name: 'Oatmeal', serving: '1 cup cooked', mealType: 'Breakfast', ingredients: ['oats'], proteinG: 6, grainsOz: 2, ironMg: 1.5 },
  { id: 'toast', name: 'Whole wheat toast', serving: '1 slice', mealType: 'Breakfast', ingredients: ['bread'], grainsOz: 1, proteinG: 4 },
  { id: 'brown-rice', name: 'Brown rice', serving: '1/2 cup cooked', mealType: 'Lunch', ingredients: ['rice'], grainsOz: 1, proteinG: 2 },
  { id: 'cereal', name: 'Fortified cereal', serving: '1 cup', mealType: 'Breakfast', ingredients: ['cereal'], grainsOz: 1, calciumMg: 110, ironMg: 11, proteinG: 3 },
  { id: 'banana', name: 'Banana', serving: '1 medium', mealType: 'Snack', ingredients: ['banana'], fruitsCups: 1 },
  { id: 'berries', name: 'Berries', serving: '1 cup', mealType: 'Snack', ingredients: ['berries'], fruitsCups: 1 },
  { id: 'orange', name: 'Orange', serving: '1 medium', mealType: 'Snack', ingredients: ['orange'], fruitsCups: 1 },
  { id: 'apple', name: 'Apple', serving: '1 medium', mealType: 'Snack', ingredients: ['apple'], fruitsCups: 1 },
  { id: 'spinach', name: 'Spinach', serving: '1/2 cup cooked', mealType: 'Lunch', ingredients: ['spinach'], vegetablesCups: 0.5, calciumMg: 71, ironMg: 2 },
  { id: 'broccoli', name: 'Broccoli', serving: '1 cup', mealType: 'Dinner', ingredients: ['broccoli'], vegetablesCups: 1, calciumMg: 60, ironMg: 1 },
  { id: 'sweet-potato', name: 'Sweet potato', serving: '1 cup', mealType: 'Dinner', ingredients: ['sweet potato'], vegetablesCups: 1 },
  { id: 'avocado', name: 'Avocado', serving: '1/2 avocado', mealType: 'Snack', ingredients: ['avocado'], oilsTsp: 3, fruitsCups: 0.5 },
  { id: 'mixed-nuts', name: 'Mixed nuts', serving: '1 oz', mealType: 'Snack', ingredients: ['nuts'], proteinG: 6, oilsTsp: 3.5, ironMg: 1 },
  { id: 'whole-wheat-pasta', name: 'Whole wheat pasta', serving: '1/2 cup cooked', mealType: 'Dinner', ingredients: ['pasta'], grainsOz: 1, proteinG: 4 },
  { id: 'peas', name: 'Peas', serving: '1 cup', mealType: 'Dinner', ingredients: ['peas'], vegetablesCups: 1, proteinG: 8, ironMg: 2 },
  { id: 'plain-yogurt', name: 'Plain yogurt', serving: '8 oz', mealType: 'Snack', ingredients: ['yogurt'], calciumMg: 414, proteinG: 12, dairyCups: 1 }
];

const MEAL_RECOMMENDATIONS = [
  { id: 'breakfast-yogurt-bowl', title: 'Yogurt berry bowl', description: 'A soft breakfast or snack that helps with dairy, fruit, and protein.', foods: ['greek-yogurt', 'berries'], ingredients: ['yogurt', 'berries'], helps: ['dairyCups', 'calciumMg', 'proteinG', 'fruitsCups'], mealType: 'Breakfast' },
  { id: 'breakfast-eggs-toast', title: 'Eggs and toast', description: 'Simple, filling, and useful when protein and grains are lagging.', foods: ['eggs-two', 'toast'], ingredients: ['egg', 'bread'], helps: ['proteinG', 'proteinFoodsOz', 'grainsOz'], mealType: 'Breakfast' },
  { id: 'lunch-chicken-rice-broccoli', title: 'Chicken rice bowl', description: 'A balanced lunch that helps with protein, grains, and vegetables.', foods: ['chicken', 'brown-rice', 'broccoli'], ingredients: ['chicken', 'rice', 'broccoli'], helps: ['proteinG', 'proteinFoodsOz', 'grainsOz', 'vegetablesCups'], mealType: 'Lunch' },
  { id: 'lunch-tofu-broccoli-rice', title: 'Tofu veggie bowl', description: 'A good iron-supporting option with tofu, rice, and broccoli.', foods: ['tofu', 'brown-rice', 'broccoli'], ingredients: ['tofu', 'rice', 'broccoli'], helps: ['ironMg', 'proteinG', 'vegetablesCups', 'grainsOz'], mealType: 'Lunch' },
  { id: 'dinner-salmon-sweet-potato-broccoli', title: 'Salmon dinner plate', description: 'A cozy dinner plate that chips away at protein and vegetables.', foods: ['salmon', 'sweet-potato', 'broccoli'], ingredients: ['salmon', 'sweet potato', 'broccoli'], helps: ['proteinG', 'proteinFoodsOz', 'vegetablesCups'], mealType: 'Dinner' },
  { id: 'dinner-beef-spinach-rice', title: 'Beef spinach bowl', description: 'A more iron-friendly dinner choice.', foods: ['lean-beef', 'spinach', 'brown-rice'], ingredients: ['beef', 'spinach', 'rice'], helps: ['ironMg', 'proteinG', 'vegetablesCups', 'grainsOz'], mealType: 'Dinner' },
  { id: 'snack-milk-banana', title: 'Milk and banana', description: 'Very easy when you need a quick calcium and fruit boost.', foods: ['milk', 'banana'], ingredients: ['milk', 'banana'], helps: ['calciumMg', 'dairyCups', 'fruitsCups'], mealType: 'Snack' },
  { id: 'snack-cheese-apple', title: 'Cheese and apple', description: 'A simple snack that nudges dairy and fruit upward.', foods: ['cheese-stick', 'apple'], ingredients: ['cheese', 'apple'], helps: ['dairyCups', 'calciumMg', 'fruitsCups'], mealType: 'Snack' }
];

const STORAGE_KEY = 'bump-bites-v2';
const DEFAULT_FAVORITES = ['greek-yogurt', 'milk', 'banana', 'egg', 'cheese-stick'];

const state = {
  data: loadState(),
  activePage: 'homePage',
  selectedMealFilter: 'All',
  pendingPhoto: null,
  modalFoodId: null,
  modalEditingLogId: null,
  mealFeedbackId: null,
  lastAddedLogId: null,
  undoTimer: null
};

const progressGrid = document.getElementById('progressGrid');
const quickWinsList = document.getElementById('quickWinsList');
const favoritesGrid = document.getElementById('favoritesGrid');
const logList = document.getElementById('logList');
const foodSearch = document.getElementById('foodSearch');
const searchResults = document.getElementById('searchResults');
const mealTypeFilters = document.getElementById('mealTypeFilters');
const photoInput = document.getElementById('photoInput');
const photoPreviewWrap = document.getElementById('photoPreviewWrap');
const photoPreview = document.getElementById('photoPreview');
const photoFoodSelect = document.getElementById('photoFoodSelect');
const photoQtyInput = document.getElementById('photoQtyInput');
const photoMealTypeSelect = document.getElementById('photoMealTypeSelect');
const addPhotoFoodBtn = document.getElementById('addPhotoFoodBtn');
const customModal = document.getElementById('customModal');
const modalTitle = document.getElementById('modalTitle');
const modalServingText = document.getElementById('modalServingText');
const modalQtyInput = document.getElementById('modalQtyInput');
const modalMealTypeSelect = document.getElementById('modalMealTypeSelect');
const modalSaveBtn = document.getElementById('modalSaveBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const mealRecommendations = document.getElementById('mealRecommendations');
const mealFeedbackModal = document.getElementById('mealFeedbackModal');
const mealIngredientOptions = document.getElementById('mealIngredientOptions');
const closeMealModalBtn = document.getElementById('closeMealModalBtn');
const hideMealOnlyBtn = document.getElementById('hideMealOnlyBtn');
const skipMealTodayBtn = document.getElementById('skipMealTodayBtn');
const saveIngredientPrefsBtn = document.getElementById('saveIngredientPrefsBtn');
const undoToast = document.getElementById('undoToast');
const undoText = document.getElementById('undoText');
const undoBtn = document.getElementById('undoBtn');
const todayDate = document.getElementById('todayDate');
const resetDayBtn = document.getElementById('resetDayBtn');

document.addEventListener('DOMContentLoaded', init);

function init() {
  todayDate.textContent = new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  bindEvents();
  populatePhotoSelect();
  renderMealFilters();
  renderSearchResults();
  renderAll();
}

function bindEvents() {
  foodSearch.addEventListener('input', renderSearchResults);
  photoInput.addEventListener('change', handlePhotoUpload);
  addPhotoFoodBtn.addEventListener('click', addPhotoFood);
  resetDayBtn.addEventListener('click', resetDay);
  renderTabs();
  renderBottomNav();
  bindModal();
  bindMealModal();
  undoBtn.addEventListener('click', undoLastAdd);
}

function resetDay() {
  if (!confirm('Reset all foods logged for today?')) return;
  state.data.logs = [];
  state.data.temporaryHiddenMeals = [];
  state.pendingPhoto = null;
  photoPreviewWrap.classList.add('hidden');
  photoPreview.src = '';
  photoInput.value = '';
  saveState();
  renderAll();
}

function renderTabs() {
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((node) => node.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((node) => node.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`${tab.dataset.tab}Panel`).classList.add('active');
    });
  });
}

function renderBottomNav() {
  document.querySelectorAll('.nav-btn').forEach((btn) => btn.addEventListener('click', () => switchPage(btn.dataset.page)));
}

function switchPage(pageId) {
  state.activePage = pageId;
  document.querySelectorAll('.page').forEach((page) => page.classList.toggle('active', page.id === pageId));
  document.querySelectorAll('.nav-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.page === pageId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bindModal() {
  closeModalBtn.addEventListener('click', closeModal);
  customModal.querySelectorAll('[data-close-modal]').forEach((node) => node.addEventListener('click', closeModal));
  modalSaveBtn.addEventListener('click', saveModalFood);
}

function bindMealModal() {
  closeMealModalBtn.addEventListener('click', closeMealModal);
  mealFeedbackModal.querySelectorAll('[data-close-meal-modal]').forEach((node) => node.addEventListener('click', closeMealModal));
  hideMealOnlyBtn.addEventListener('click', () => {
    if (!state.mealFeedbackId) return;
    if (!state.data.hiddenMeals.includes(state.mealFeedbackId)) state.data.hiddenMeals.push(state.mealFeedbackId);
    saveState();
    closeMealModal();
    renderMeals();
  });
  skipMealTodayBtn.addEventListener('click', () => {
    if (!state.mealFeedbackId) return;
    if (!state.data.temporaryHiddenMeals.includes(state.mealFeedbackId)) state.data.temporaryHiddenMeals.push(state.mealFeedbackId);
    saveState();
    closeMealModal();
    renderMeals();
  });
  saveIngredientPrefsBtn.addEventListener('click', saveIngredientPreferences);
}

function openCustomModal(foodId, existingLog = null) {
  const food = findFood(foodId);
  if (!food) return;
  state.modalFoodId = foodId;
  state.modalEditingLogId = existingLog?.id || null;
  modalTitle.textContent = existingLog ? `Edit ${food.name}` : `Add ${food.name}`;
  modalServingText.textContent = `Default serving: ${food.serving}`;
  modalQtyInput.value = existingLog?.qty || 1;
  modalMealTypeSelect.value = existingLog?.mealType || food.mealType || 'Snack';
  customModal.classList.remove('hidden');
  customModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  state.modalFoodId = null;
  state.modalEditingLogId = null;
  customModal.classList.add('hidden');
  customModal.setAttribute('aria-hidden', 'true');
}

function saveModalFood() {
  const foodId = state.modalFoodId;
  if (!foodId) return;
  const qty = getSafeQty(modalQtyInput.value);
  const mealType = modalMealTypeSelect.value || findFood(foodId)?.mealType || 'Snack';
  if (state.modalEditingLogId) {
    state.data.logs = state.data.logs.map((log) => log.id === state.modalEditingLogId ? { ...log, qty, mealType } : log);
    saveState();
    renderAll();
    closeModal();
    switchPage('logPage');
    return;
  }
  addFoodToLog(foodId, { source: 'Custom', qty, mealType });
  closeModal();
  switchPage('logPage');
}

function populatePhotoSelect() {
  photoFoodSelect.innerHTML = '<option value="">Choose a food to add...</option>';
  FOOD_LIBRARY.forEach((food) => {
    const option = document.createElement('option');
    option.value = food.id;
    option.textContent = `${food.name} • ${food.serving}`;
    photoFoodSelect.appendChild(option);
  });
  photoFoodSelect.addEventListener('change', () => {
    const food = findFood(photoFoodSelect.value);
    if (food) photoMealTypeSelect.value = food.mealType || 'Snack';
  });
}

function handlePhotoUpload(event) {
  const [file] = event.target.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.pendingPhoto = reader.result;
    photoPreview.src = reader.result;
    photoPreviewWrap.classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}

function addPhotoFood() {
  const selectedFoodId = photoFoodSelect.value;
  if (!selectedFoodId) {
    alert('Pick a food first.');
    return;
  }
  addFoodToLog(selectedFoodId, {
    source: 'Photo',
    qty: getSafeQty(photoQtyInput.value),
    photo: state.pendingPhoto,
    mealType: photoMealTypeSelect.value || findFood(selectedFoodId)?.mealType || 'Snack'
  });
  switchPage('logPage');
}

function addFoodToLog(foodId, extras = {}) {
  const food = findFood(foodId);
  if (!food) return;
  const log = {
    id: crypto.randomUUID(),
    foodId,
    qty: getSafeQty(extras.qty || 1),
    source: extras.source || 'Manual',
    photo: extras.photo || null,
    createdAt: new Date().toISOString(),
    mealType: extras.mealType || food.mealType || 'Snack'
  };
  state.data.logs.unshift(log);
  state.lastAddedLogId = log.id;
  if (extras.photo) {
    state.pendingPhoto = null;
    photoInput.value = '';
    photoPreviewWrap.classList.add('hidden');
    photoPreview.src = '';
    photoQtyInput.value = '1';
  }
  saveState();
  renderAll();
  showUndoToast(`Added ${food.name}`);
}

function undoLastAdd() {
  if (!state.lastAddedLogId) return;
  const before = state.data.logs.length;
  state.data.logs = state.data.logs.filter((entry) => entry.id !== state.lastAddedLogId);
  if (state.data.logs.length !== before) {
    saveState();
    renderAll();
  }
  state.lastAddedLogId = null;
  hideUndoToast();
}

function showUndoToast(text) {
  undoText.textContent = text;
  undoToast.classList.remove('hidden');
  clearTimeout(state.undoTimer);
  state.undoTimer = setTimeout(hideUndoToast, 5000);
}

function hideUndoToast() {
  undoToast.classList.add('hidden');
  clearTimeout(state.undoTimer);
  state.undoTimer = null;
}

function toggleFavorite(foodId) {
  if (isFavorite(foodId)) {
    state.data.favorites = state.data.favorites.filter((id) => id !== foodId);
  } else {
    state.data.favorites.unshift(foodId);
  }
  saveState();
  renderFavorites();
  renderSearchResults();
  renderLog();
}

function isFavorite(foodId) {
  return state.data.favorites.includes(foodId);
}

function renderAll() {
  renderProgress();
  renderQuickWins();
  renderFavorites();
  renderLog();
  renderMeals();
}

function renderProgress() {
  const totals = calculateTotals();
  progressGrid.innerHTML = '';
  const template = document.getElementById('progressTemplate');
  DAILY_TARGETS.forEach((target) => {
    const current = round(totals[target.id] || 0);
    const goal = target.min;
    const pct = Math.min(100, goal > 0 ? (current / goal) * 100 : 0);
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('h3').textContent = target.label;
    node.querySelector('.progress-numbers').textContent = `${formatNumber(current)} ${target.unit}`;
    node.querySelector('.bar-fill').style.width = `${pct}%`;
    const note = target.max
      ? current < target.min
        ? `${formatNumber(target.min - current)} ${target.unit} left to reach the minimum`
        : current > target.max
          ? `${formatNumber(current - target.max)} ${target.unit} above the suggested range`
          : `Inside your suggested range of ${target.min}-${target.max} ${target.unit}`
      : current < target.min
        ? `${formatNumber(target.min - current)} ${target.unit} left today`
        : 'Goal reached for today';
    node.querySelector('.progress-note').textContent = note;
    progressGrid.appendChild(node);
  });
}

function renderQuickWins() {
  quickWinsList.innerHTML = '';
  const totals = calculateTotals();
  const needs = getNeeds(totals);
  const topNeedIds = needs.slice(0, 4).map((need) => need.id);
  const rankedFoods = FOOD_LIBRARY
    .filter((food) => !foodHasDislikedIngredient(food))
    .map((food) => {
      const score = topNeedIds.reduce((sum, id) => sum + Number(food[id] || 0), 0);
      return { food, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  if (!rankedFoods.length) {
    quickWinsList.innerHTML = '<p class="empty-note">You hit your current minimums. You can still add foods from the Add tab whenever you eat more.</p>';
    return;
  }

  rankedFoods.forEach(({ food }) => {
    const card = document.createElement('article');
    card.className = 'recommendation-card';
    card.innerHTML = `
      <h3>${food.name}</h3>
      <p>${food.serving}</p>
      <p class="muted">${buildHelpText(food, topNeedIds)}</p>
    `;
    const actions = document.createElement('div');
    actions.className = 'recommendation-actions';
    const addBtn = button('primary-btn', 'Add');
    addBtn.addEventListener('click', () => addFoodToLog(food.id, { source: 'Quick Win' }));
    const customBtn = button('secondary-btn', 'Custom');
    customBtn.addEventListener('click', () => openCustomModal(food.id));
    const favBtn = button(`fav-btn ${isFavorite(food.id) ? 'active' : ''}`, isFavorite(food.id) ? '♥' : '♡');
    favBtn.setAttribute('aria-label', 'Favorite this food');
    favBtn.addEventListener('click', () => toggleFavorite(food.id));
    actions.append(addBtn, customBtn, favBtn);
    card.appendChild(actions);
    quickWinsList.appendChild(card);
  });
}

function renderSearchResults() {
  const query = foodSearch.value.trim().toLowerCase();
  const results = FOOD_LIBRARY.filter((food) => !query || `${food.name} ${food.serving}`.toLowerCase().includes(query));
  searchResults.innerHTML = '';
  results.forEach((food) => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `
      <div class="food-copy">
        <strong>${food.name}</strong>
        <small>${food.serving}</small>
      </div>
      <div class="search-item-actions wrap-actions">
        <button class="fav-btn ${isFavorite(food.id) ? 'active' : ''}" type="button" aria-label="Favorite this food">${isFavorite(food.id) ? '♥' : '♡'}</button>
        <button class="secondary-btn">Custom</button>
        <button class="primary-btn">Add</button>
      </div>
    `;
    const [favBtn, customBtn, addBtn] = item.querySelectorAll('button');
    favBtn.addEventListener('click', () => toggleFavorite(food.id));
    customBtn.addEventListener('click', () => openCustomModal(food.id));
    addBtn.addEventListener('click', () => addFoodToLog(food.id, { source: 'Search' }));
    searchResults.appendChild(item);
  });
}

function renderFavorites() {
  favoritesGrid.innerHTML = '';
  const favorites = state.data.favorites.map(findFood).filter(Boolean);
  if (!favorites.length) {
    favoritesGrid.innerHTML = '<p class="muted empty-state">No favorites yet. Tap a heart on a food and it will bloom here.</p>';
    return;
  }
  favorites.forEach((food) => {
    const card = document.createElement('article');
    card.className = 'favorite-card';
    card.innerHTML = `
      <div>
        <strong>${food.name}</strong>
        <span>${food.serving}</span>
      </div>
      <div class="favorite-card-actions wrap-actions">
        <button class="secondary-btn">Custom</button>
        <button class="primary-btn">Add</button>
        <button class="fav-btn active" type="button" aria-label="Remove favorite">♥</button>
      </div>
    `;
    const [customBtn, addBtn, favBtn] = card.querySelectorAll('button');
    customBtn.addEventListener('click', () => openCustomModal(food.id));
    addBtn.addEventListener('click', () => addFoodToLog(food.id, { source: 'Favorite' }));
    favBtn.addEventListener('click', () => toggleFavorite(food.id));
    favoritesGrid.appendChild(card);
  });
}

function renderMealFilters() {
  const filters = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'];
  mealTypeFilters.innerHTML = '';
  filters.forEach((filter) => {
    const btn = document.createElement('button');
    btn.className = `filter-chip ${state.selectedMealFilter === filter ? 'active' : ''}`;
    btn.textContent = filter;
    btn.addEventListener('click', () => {
      state.selectedMealFilter = filter;
      renderMealFilters();
      renderLog();
    });
    mealTypeFilters.appendChild(btn);
  });
}

function renderLog() {
  const template = document.getElementById('logItemTemplate');
  logList.innerHTML = '';
  const logs = state.data.logs.filter((log) => state.selectedMealFilter === 'All' || log.mealType === state.selectedMealFilter);
  if (!logs.length) {
    logList.innerHTML = '<p class="muted empty-state">No foods logged yet for this filter.</p>';
    return;
  }
  logs.forEach((log) => {
    const food = findFood(log.foodId);
    if (!food) return;
    const qty = getSafeQty(log.qty || 1);
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.log-title').textContent = food.name;
    node.querySelector('.log-meta').textContent = `${formatQtyLabel(qty, food.serving)} • ${log.mealType} • ${new Date(log.createdAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
    const tags = [];
    if (food.proteinG) tags.push(`${formatNumber(food.proteinG * qty)}g protein`);
    if (food.calciumMg) tags.push(`${formatNumber(food.calciumMg * qty)}mg calcium`);
    if (food.ironMg) tags.push(`${formatNumber(food.ironMg * qty)}mg iron`);
    if (food.fruitsCups) tags.push(`${formatNumber(food.fruitsCups * qty)} cup fruit`);
    if (food.vegetablesCups) tags.push(`${formatNumber(food.vegetablesCups * qty)} cup veg`);
    if (food.grainsOz) tags.push(`${formatNumber(food.grainsOz * qty)} oz grains`);
    if (food.dairyCups) tags.push(`${formatNumber(food.dairyCups * qty)} cup dairy`);
    const tagsWrap = node.querySelector('.log-tags');
    tags.forEach((tag) => {
      const pill = document.createElement('span');
      pill.className = 'log-tag';
      pill.textContent = tag;
      tagsWrap.appendChild(pill);
    });
    const img = node.querySelector('.log-photo');
    if (log.photo) {
      img.src = log.photo;
      img.classList.remove('hidden');
    }
    node.querySelector('.edit-btn').addEventListener('click', () => openCustomModal(food.id, log));
    const favBtn = node.querySelector('.fav-btn');
    favBtn.textContent = isFavorite(food.id) ? '♥' : '♡';
    favBtn.classList.toggle('active', isFavorite(food.id));
    favBtn.addEventListener('click', () => toggleFavorite(food.id));
    node.querySelector('.delete-btn').addEventListener('click', () => {
      state.data.logs = state.data.logs.filter((entry) => entry.id !== log.id);
      saveState();
      renderAll();
    });
    logList.appendChild(node);
  });
}

function renderMeals() {
  mealRecommendations.innerHTML = '';
  const totals = calculateTotals();
  const needs = getNeeds(totals);
  const topNeedIds = needs.slice(0, 4).map((need) => need.id);
  const ranked = MEAL_RECOMMENDATIONS
    .filter((meal) => !state.data.hiddenMeals.includes(meal.id))
    .filter((meal) => !state.data.temporaryHiddenMeals.includes(meal.id))
    .filter((meal) => !meal.ingredients.some((ingredient) => state.data.dislikedIngredients.includes(ingredient)))
    .map((meal) => ({
      meal,
      score: meal.helps.reduce((sum, help) => sum + (topNeedIds.includes(help) ? 4 : 0.5), 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  if (!ranked.length) {
    mealRecommendations.innerHTML = '<p class="empty-note">No meal suggestions are left with your current preferences. You can still add foods manually from the Add tab.</p>';
    return;
  }

  ranked.forEach(({ meal }) => {
    const foods = meal.foods.map(findFood).filter(Boolean);
    const card = document.createElement('article');
    card.className = 'recommendation-card';
    card.innerHTML = `
      <h3>${meal.title}</h3>
      <p>${meal.description}</p>
      <p><strong>Includes:</strong> ${foods.map((food) => `${food.name} (${food.serving})`).join(', ')}</p>
      <p class="muted">Best for: ${meal.helps.map(findTargetLabel).join(', ')}</p>
    `;
    const actions = document.createElement('div');
    actions.className = 'recommendation-actions';
    const addBtn = button('primary-btn', 'Add meal');
    addBtn.addEventListener('click', () => {
      foods.forEach((food) => addFoodToLog(food.id, { source: 'Meal recommendation', mealType: meal.mealType }));
      switchPage('logPage');
    });
    const notForMeBtn = button('secondary-btn', 'Not for me');
    notForMeBtn.addEventListener('click', () => openMealFeedbackModal(meal.id));
    actions.append(addBtn, notForMeBtn);
    card.appendChild(actions);
    mealRecommendations.appendChild(card);
  });
}

function openMealFeedbackModal(mealId) {
  state.mealFeedbackId = mealId;
  const meal = MEAL_RECOMMENDATIONS.find((item) => item.id === mealId);
  mealIngredientOptions.innerHTML = '';
  (meal?.ingredients || []).forEach((ingredient) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `ingredient-chip ${state.data.dislikedIngredients.includes(ingredient) ? 'active' : ''}`;
    btn.textContent = ingredient;
    btn.dataset.ingredient = ingredient;
    btn.addEventListener('click', () => btn.classList.toggle('active'));
    mealIngredientOptions.appendChild(btn);
  });
  mealFeedbackModal.classList.remove('hidden');
  mealFeedbackModal.setAttribute('aria-hidden', 'false');
}

function closeMealModal() {
  state.mealFeedbackId = null;
  mealFeedbackModal.classList.add('hidden');
  mealFeedbackModal.setAttribute('aria-hidden', 'true');
}

function saveIngredientPreferences() {
  const selected = Array.from(mealIngredientOptions.querySelectorAll('.ingredient-chip.active')).map((node) => node.dataset.ingredient);
  selected.forEach((ingredient) => {
    if (!state.data.dislikedIngredients.includes(ingredient)) state.data.dislikedIngredients.push(ingredient);
  });
  if (state.mealFeedbackId && !state.data.hiddenMeals.includes(state.mealFeedbackId)) {
    state.data.hiddenMeals.push(state.mealFeedbackId);
  }
  saveState();
  closeMealModal();
  renderAll();
}

function getNeeds(totals) {
  return DAILY_TARGETS
    .map((target) => ({ ...target, remaining: Math.max(0, target.min - (totals[target.id] || 0)) }))
    .filter((target) => target.remaining > 0)
    .sort((a, b) => b.remaining - a.remaining);
}

function buildHelpText(food, topNeedIds) {
  const helped = topNeedIds.filter((id) => Number(food[id] || 0) > 0).map(findTargetLabel);
  return helped.length ? `Helps with ${helped.join(', ').toLowerCase()}.` : 'A handy little add for your day.';
}

function findTargetLabel(id) {
  return DAILY_TARGETS.find((target) => target.id === id)?.label || id;
}

function foodHasDislikedIngredient(food) {
  return (food.ingredients || []).some((ingredient) => state.data.dislikedIngredients.includes(ingredient));
}

function calculateTotals() {
  const totals = Object.fromEntries(DAILY_TARGETS.map((target) => [target.id, 0]));
  state.data.logs.forEach((log) => {
    const food = findFood(log.foodId);
    if (!food) return;
    const qty = getSafeQty(log.qty || 1);
    DAILY_TARGETS.forEach((target) => {
      totals[target.id] += Number(food[target.id] || 0) * qty;
    });
  });
  return totals;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { logs: [], favorites: DEFAULT_FAVORITES, hiddenMeals: [], temporaryHiddenMeals: [], dislikedIngredients: [] };
  }
  try {
    const parsed = JSON.parse(raw);
    return {
      logs: Array.isArray(parsed.logs) ? parsed.logs.map((log) => ({ ...log, qty: getSafeQty(log.qty || 1) })) : [],
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : DEFAULT_FAVORITES,
      hiddenMeals: Array.isArray(parsed.hiddenMeals) ? parsed.hiddenMeals : [],
      temporaryHiddenMeals: Array.isArray(parsed.temporaryHiddenMeals) ? parsed.temporaryHiddenMeals : [],
      dislikedIngredients: Array.isArray(parsed.dislikedIngredients) ? parsed.dislikedIngredients : []
    };
  } catch {
    return { logs: [], favorites: DEFAULT_FAVORITES, hiddenMeals: [], temporaryHiddenMeals: [], dislikedIngredients: [] };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function findFood(id) {
  return FOOD_LIBRARY.find((food) => food.id === id);
}

function getSafeQty(value) {
  const num = Number(value);
  return Number.isFinite(num) && num > 0 ? num : 1;
}

function formatQtyLabel(qty, serving) {
  return qty === 1 ? serving : `${formatNumber(qty)} × ${serving}`;
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, '');
}

function round(value) {
  return Math.round(value * 10) / 10;
}

function button(className, text) {
  const btn = document.createElement('button');
  btn.className = className;
  btn.type = 'button';
  btn.textContent = text;
  return btn;
}
