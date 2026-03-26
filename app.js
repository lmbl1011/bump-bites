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

const PRENATAL_FOOD = { id: 'prenatal-vitamin', name: 'Prenatal vitamin', serving: '1 softgel', mealType: 'Supplement', ingredients: ['prenatal'], calciumMg: 150, ironMg: 27, isSupplement: true };

const FOOD_UNIT_CONFIGS = {
  'greek-yogurt': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'milk': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'fortified-oj': { baseAmount: 6, baseUnit: 'oz', units: ['oz', 'cup'] },
  'cottage-cheese': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'cheese-stick': { baseAmount: 1, baseUnit: 'item', units: ['item'] },
  'mozzarella': { baseAmount: 1, baseUnit: 'oz', units: ['oz', 'tbsp'] },
  'egg': { baseAmount: 1, baseUnit: 'egg', units: ['egg'] },
  'eggs-two': { baseAmount: 2, baseUnit: 'egg', units: ['egg'] },
  'chicken': { baseAmount: 3, baseUnit: 'oz', units: ['oz'] },
  'salmon': { baseAmount: 3, baseUnit: 'oz', units: ['oz'] },
  'lean-beef': { baseAmount: 3, baseUnit: 'oz', units: ['oz'] },
  'tofu': { baseAmount: 0.5, baseUnit: 'cup', units: ['cup', 'oz'] },
  'soybeans': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'peanut-butter': { baseAmount: 1, baseUnit: 'tbsp', units: ['tbsp', 'tsp'] },
  'oatmeal': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'toast': { baseAmount: 1, baseUnit: 'slice', units: ['slice'] },
  'brown-rice': { baseAmount: 0.5, baseUnit: 'cup', units: ['cup', 'oz'] },
  'cereal': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'banana': { baseAmount: 1, baseUnit: 'item', units: ['item'] },
  'berries': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'orange': { baseAmount: 1, baseUnit: 'item', units: ['item'] },
  'apple': { baseAmount: 1, baseUnit: 'item', units: ['item'] },
  'spinach': { baseAmount: 0.5, baseUnit: 'cup', units: ['cup', 'oz'] },
  'broccoli': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'sweet-potato': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'avocado': { baseAmount: 0.5, baseUnit: 'item', units: ['item', 'cup'] },
  'mixed-nuts': { baseAmount: 1, baseUnit: 'oz', units: ['oz', 'tbsp'] },
  'whole-wheat-pasta': { baseAmount: 0.5, baseUnit: 'cup', units: ['cup', 'oz'] },
  'peas': { baseAmount: 1, baseUnit: 'cup', units: ['cup', 'oz'] },
  'plain-yogurt': { baseAmount: 8, baseUnit: 'oz', units: ['oz', 'cup'] },
  'prenatal-vitamin': { baseAmount: 1, baseUnit: 'item', units: ['item'] }
};

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

const STORAGE_KEY = 'bump-bites-v6-prenatal';
const STORAGE_KEYS_TO_MIGRATE = [STORAGE_KEY, 'bump-bites-v5-custom-foods', 'bump-bites-v4-cleanup', 'bump-bites-v3-units', 'bump-bites-v2-final', 'bump-bites-v1'];
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
  undoTimer: null,
  currentTargetId: null,
  customFoodEditingId: null
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

const customFoodForm = document.getElementById('customFoodForm');
const customFoodsList = document.getElementById('customFoodsList');
const customFoodName = document.getElementById('customFoodName');
const customFoodBaseAmount = document.getElementById('customFoodBaseAmount');
const customFoodBaseUnit = document.getElementById('customFoodBaseUnit');
const customFoodMealType = document.getElementById('customFoodMealType');
const customFoodProtein = document.getElementById('customFoodProtein');
const customFoodCalcium = document.getElementById('customFoodCalcium');
const customFoodIron = document.getElementById('customFoodIron');
const customFoodGrains = document.getElementById('customFoodGrains');
const customFoodVegetables = document.getElementById('customFoodVegetables');
const customFoodFruits = document.getElementById('customFoodFruits');
const customFoodDairy = document.getElementById('customFoodDairy');
const customFoodProteinFoods = document.getElementById('customFoodProteinFoods');
const customFoodOils = document.getElementById('customFoodOils');
const customFoodSaveAddBtn = document.getElementById('customFoodSaveAddBtn');
const customFoodEditingNote = document.getElementById('customFoodEditingNote');
const customModal = document.getElementById('customModal');
const modalTitle = document.getElementById('modalTitle');
const modalServingText = document.getElementById('modalServingText');
const modalQtyInput = document.getElementById('modalQtyInput');
const modalUnitSelect = document.getElementById('modalUnitSelect');
const fractionButtons = document.getElementById('fractionButtons');
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
const targetDetailModal = document.getElementById('targetDetailModal');
const targetDetailTitle = document.getElementById('targetDetailTitle');
const targetDetailSummary = document.getElementById('targetDetailSummary');
const targetDetailList = document.getElementById('targetDetailList');
const closeTargetModalBtn = document.getElementById('closeTargetModalBtn');
const todayDate = document.getElementById('todayDate');
const resetDayBtn = document.getElementById('resetDayBtn');
const prenatalToggleBtn = document.getElementById('prenatalToggleBtn');
const prenatalUndoBtn = document.getElementById('prenatalUndoBtn');
const prenatalSummary = document.getElementById('prenatalSummary');

document.addEventListener('DOMContentLoaded', init);

function init() {
  todayDate.textContent = new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  bindEvents();
  populatePhotoSelect();
  renderMealFilters();
  renderSearchResults();
  renderCustomFoods();
  renderPrenatalSection();
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
  bindFractionButtons();
  customFoodForm.addEventListener('submit', handleCustomFoodSaveOnly);
  customFoodSaveAddBtn.addEventListener('click', handleCustomFoodSaveAndAdd);
  undoBtn.addEventListener('click', undoLastAdd);
  prenatalToggleBtn?.addEventListener('click', togglePrenatalLog);
  prenatalUndoBtn?.addEventListener('click', removePrenatalLog);
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

function bindFractionButtons() {
  fractionButtons?.querySelectorAll('.fraction-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      modalQtyInput.value = btn.dataset.value;
    });
  });
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
  closeTargetModalBtn.addEventListener('click', closeTargetModal);
  document.querySelectorAll('[data-close-target-modal]').forEach((node) => node.addEventListener('click', closeTargetModal));
}

function openCustomModal(foodId, existingLog = null) {
  const food = findFood(foodId);
  if (!food) return;
  state.modalFoodId = foodId;
  state.modalEditingLogId = existingLog?.id || null;
  const unitConfig = getFoodUnitConfig(food);
  modalTitle.textContent = existingLog ? `Edit ${food.name}` : `Add ${food.name}`;
  modalServingText.textContent = `Default serving: ${food.serving}`;
  populateUnitSelect(food, existingLog?.unit || unitConfig.baseUnit);
  modalQtyInput.value = existingLog?.amount || unitConfig.baseAmount;
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
  const amount = getSafeQty(modalQtyInput.value);
  const unit = modalUnitSelect.value || getFoodUnitConfig(findFood(foodId)).baseUnit;
  const mealType = modalMealTypeSelect.value || findFood(foodId)?.mealType || 'Snack';
  if (state.modalEditingLogId) {
    state.data.logs = state.data.logs.map((log) => log.id === state.modalEditingLogId ? { ...log, amount, unit, mealType, qty: convertToServings(foodId, amount, unit) } : log);
    saveState();
    renderAll();
    closeModal();
    switchPage('logPage');
    return;
  }
  addFoodToLog(foodId, { source: 'Custom', amount, unit, mealType });
  closeModal();
  switchPage('logPage');
}

function populatePhotoSelect() {
  photoFoodSelect.innerHTML = '<option value="">Choose a food to add...</option>';
  getAllFoods().forEach((food) => {
    const option = document.createElement('option');
    option.value = food.id;
    option.textContent = `${food.name} | ${food.serving}`;
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
  const unitConfig = getFoodUnitConfig(food);
  const amount = getSafeQty(extras.amount || extras.qty || unitConfig.baseAmount);
  const unit = extras.unit || unitConfig.baseUnit;
  const log = {
    id: crypto.randomUUID(),
    foodId,
    amount,
    unit,
    qty: convertToServings(foodId, amount, unit),
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


function getPrenatalLog() {
  return state.data.logs.find((log) => log.foodId === PRENATAL_FOOD.id) || null;
}

function togglePrenatalLog() {
  const existing = getPrenatalLog();
  if (existing) {
    removePrenatalLog();
    return;
  }
  addFoodToLog(PRENATAL_FOOD.id, { source: 'Supplement', amount: 1, unit: 'item', mealType: 'Supplement' });
  showUndoToast('Logged prenatal vitamin');
  renderPrenatalSection();
}

function removePrenatalLog() {
  const existing = getPrenatalLog();
  if (!existing) return;
  state.data.logs = state.data.logs.filter((log) => log.id !== existing.id);
  if (state.lastAddedLogId === existing.id) state.lastAddedLogId = null;
  saveState();
  renderAll();
}

function renderPrenatalSection() {
  const logged = Boolean(getPrenatalLog());
  if (prenatalToggleBtn) {
    prenatalToggleBtn.textContent = logged ? 'Prenatal logged' : 'Log prenatal';
    prenatalToggleBtn.classList.toggle('active-soft', logged);
  }
  if (prenatalUndoBtn) prenatalUndoBtn.classList.toggle('hidden', !logged);
  if (prenatalSummary) prenatalSummary.textContent = logged
    ? 'Logged today. Counting 27 mg iron and 150 mg calcium.'
    : 'Adds 27 mg iron and 150 mg calcium.';
}

function renderAll() {
  renderPrenatalSection();
  renderProgress();
  renderQuickWins();
  renderFavorites();
  renderLog();
  renderMeals();
  renderSearchResults();
  renderCustomFoods();
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
    node.dataset.targetId = target.id;
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
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
    node.querySelector('.progress-note').textContent = `${note} Tap for details.`;
    node.addEventListener('click', () => openTargetModal(target.id));
    node.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openTargetModal(target.id);
      }
    });
    progressGrid.appendChild(node);
  });
}

function renderQuickWins() {
  quickWinsList.innerHTML = '';
  const totals = calculateTotals();
  const needs = getNeeds(totals);
  const topNeedIds = needs.slice(0, 4).map((need) => need.id);
  const rankedFoods = getAllFoods()
    .filter((food) => !food.isSupplement)
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
    const favBtn = button(`fav-btn ${isFavorite(food.id) ? 'active' : ''}`, isFavorite(food.id) ? 'Remove favorite' : 'Save');
    favBtn.setAttribute('aria-label', 'Favorite this food');
    favBtn.addEventListener('click', () => toggleFavorite(food.id));
    actions.append(addBtn, customBtn, favBtn);
    card.appendChild(actions);
    quickWinsList.appendChild(card);
  });
}

function renderSearchResults() {
  const query = foodSearch.value.trim().toLowerCase();
  const results = getAllFoods().filter((food) => !food.isSupplement).filter((food) => !query || `${food.name} ${food.serving}`.toLowerCase().includes(query));
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
        <button class="fav-btn ${isFavorite(food.id) ? 'active' : ''}" type="button" aria-label="Save this food">${isFavorite(food.id) ? 'Remove favorite' : 'Save'}</button>
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
  const favorites = state.data.favorites.map(findFood).filter((food) => food && !food.isSupplement);
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
        <button class="fav-btn active" type="button" aria-label="Remove favorite">Remove favorite</button>
      </div>
    `;
    const [customBtn, addBtn, favBtn] = card.querySelectorAll('button');
    customBtn.addEventListener('click', () => openCustomModal(food.id));
    addBtn.addEventListener('click', () => addFoodToLog(food.id, { source: 'Favorite' }));
    favBtn.addEventListener('click', () => toggleFavorite(food.id));
    favoritesGrid.appendChild(card);
  });
}


function renderCustomFoods() {
  if (!customFoodsList) return;
  customFoodsList.innerHTML = '';
  const customFoods = state.data.customFoods || [];
  if (!customFoods.length) {
    customFoodsList.innerHTML = '<p class="muted empty-state">No custom foods yet. Build one here and it will show up for easy reuse.</p>';
    return;
  }
  customFoods.forEach((food) => {
    const card = document.createElement('article');
    card.className = 'favorite-card';
    card.innerHTML = `
      <div>
        <strong>${food.name}</strong>
        <span>${food.serving}</span>
      </div>
      <div class="favorite-card-actions wrap-actions">
        <button class="secondary-btn" type="button">Edit</button>
        <button class="secondary-btn" type="button">Custom</button>
        <button class="primary-btn" type="button">Add</button>
        <button class="fav-btn ${isFavorite(food.id) ? 'active' : ''}" type="button">${isFavorite(food.id) ? 'Remove favorite' : 'Save'}</button>
        <button class="delete-btn" type="button">Delete</button>
      </div>
    `;
    const [editBtn, customBtn, addBtn, favBtn, deleteBtn] = card.querySelectorAll('button');
    editBtn.addEventListener('click', () => startEditingCustomFood(food.id));
    customBtn.addEventListener('click', () => openCustomModal(food.id));
    addBtn.addEventListener('click', () => addFoodToLog(food.id, { source: 'Custom food' }));
    favBtn.addEventListener('click', () => toggleFavorite(food.id));
    deleteBtn.addEventListener('click', () => deleteCustomFood(food.id));
    customFoodsList.appendChild(card);
  });
}

function handleCustomFoodSaveOnly(event) {
  event.preventDefault();
  saveCustomFood(false);
}

function handleCustomFoodSaveAndAdd() {
  saveCustomFood(true);
}

function startEditingCustomFood(foodId) {
  const food = findFood(foodId);
  if (!food) return;
  state.customFoodEditingId = foodId;
  customFoodName.value = food.name || '';
  customFoodBaseAmount.value = getFoodUnitConfig(food).baseAmount || 1;
  customFoodBaseUnit.value = getFoodUnitConfig(food).baseUnit || 'serving';
  customFoodMealType.value = food.mealType || 'Snack';
  customFoodProtein.value = food.proteinG || 0;
  customFoodCalcium.value = food.calciumMg || 0;
  customFoodIron.value = food.ironMg || 0;
  customFoodGrains.value = food.grainsOz || 0;
  customFoodVegetables.value = food.vegetablesCups || 0;
  customFoodFruits.value = food.fruitsCups || 0;
  customFoodDairy.value = food.dairyCups || 0;
  customFoodProteinFoods.value = food.proteinFoodsOz || 0;
  customFoodOils.value = food.oilsTsp || 0;
  customFoodEditingNote.classList.remove('hidden');
  document.querySelectorAll('.tab').forEach((node) => node.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach((node) => node.classList.remove('active'));
  document.querySelector('.tab[data-tab="customFood"]').classList.add('active');
  document.getElementById('customFoodPanel').classList.add('active');
  switchPage('addPage');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetCustomFoodForm() {
  customFoodForm.reset();
  customFoodBaseAmount.value = '1';
  customFoodBaseUnit.value = 'serving';
  customFoodMealType.value = 'Snack';
  state.customFoodEditingId = null;
  customFoodEditingNote.classList.add('hidden');
}

function saveCustomFood(andAddNow = false) {
  const name = customFoodName.value.trim();
  if (!name) {
    alert('Give your custom food a name first.');
    return;
  }
  const baseAmount = getSafeQty(customFoodBaseAmount.value);
  const baseUnit = customFoodBaseUnit.value || 'serving';
  const customId = state.customFoodEditingId || `custom-${crypto.randomUUID()}`;
  const food = {
    id: customId,
    isCustom: true,
    name,
    serving: `${formatNumber(baseAmount)} ${unitLabel(baseUnit, baseUnit)}`,
    mealType: customFoodMealType.value || 'Snack',
    ingredients: [name.toLowerCase()],
    proteinG: getSafeNonNegative(customFoodProtein.value),
    calciumMg: getSafeNonNegative(customFoodCalcium.value),
    ironMg: getSafeNonNegative(customFoodIron.value),
    grainsOz: getSafeNonNegative(customFoodGrains.value),
    vegetablesCups: getSafeNonNegative(customFoodVegetables.value),
    fruitsCups: getSafeNonNegative(customFoodFruits.value),
    dairyCups: getSafeNonNegative(customFoodDairy.value),
    proteinFoodsOz: getSafeNonNegative(customFoodProteinFoods.value),
    oilsTsp: getSafeNonNegative(customFoodOils.value),
    unitConfig: { baseAmount, baseUnit, units: [baseUnit] }
  };
  const existingIndex = (state.data.customFoods || []).findIndex((item) => item.id === customId);
  if (existingIndex >= 0) {
    state.data.customFoods[existingIndex] = food;
  } else {
    state.data.customFoods = [food, ...(state.data.customFoods || [])];
  }
  saveState();
  renderAll();
  if (andAddNow) {
    addFoodToLog(food.id, { source: 'Custom food', mealType: food.mealType });
    switchPage('logPage');
  } else {
    switchPage('addPage');
  }
  resetCustomFoodForm();
}

function deleteCustomFood(foodId) {
  const food = findFood(foodId);
  if (!food) return;
  if (!confirm(`Delete ${food.name}? This will also remove its old log entries.`)) return;
  state.data.customFoods = (state.data.customFoods || []).filter((item) => item.id !== foodId);
  state.data.logs = state.data.logs.filter((log) => log.foodId !== foodId);
  state.data.favorites = state.data.favorites.filter((id) => id !== foodId);
  if (state.customFoodEditingId === foodId) resetCustomFoodForm();
  saveState();
  renderAll();
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
    const qty = getSafeQty(log.qty || convertToServings(log.foodId, log.amount || 1, log.unit));
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.log-title').textContent = food.name;
    node.querySelector('.log-meta').textContent = `${formatEntryAmount(log, food)} | ${log.mealType} | ${new Date(log.createdAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
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
    const editBtn = node.querySelector('.edit-btn');
    if (food.isSupplement) {
      editBtn.classList.add('hidden');
    } else {
      editBtn.addEventListener('click', () => openCustomModal(food.id, log));
    }
    const favBtn = node.querySelector('.fav-btn');
    favBtn.textContent = isFavorite(food.id) ? 'Remove favorite' : 'Save';
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

function openTargetModal(targetId) {
  state.currentTargetId = targetId;
  const target = DAILY_TARGETS.find((item) => item.id === targetId);
  if (!target) return;
  const totals = calculateTotals();
  const current = round(totals[target.id] || 0);
  const remaining = Math.max(0, round(target.min - current));
  targetDetailTitle.textContent = target.label;
  targetDetailSummary.textContent = `${formatNumber(current)} ${target.unit} so far${remaining > 0 ? ` | ${formatNumber(remaining)} ${target.unit} left today` : ' | Goal reached for today'}`;
  targetDetailList.innerHTML = '';

  const matchingLogs = state.data.logs
    .map((log) => {
      const food = findFood(log.foodId);
      const qty = getSafeQty(log.qty || convertToServings(log.foodId, log.amount || 1, log.unit));
      const contribution = Number(food?.[target.id] || 0) * qty;
      return contribution > 0 ? { log, food, contribution } : null;
    })
    .filter(Boolean);

  if (!matchingLogs.length) {
    targetDetailList.innerHTML = '<p class="empty-note">Nothing logged in this category yet today.</p>';
  } else {
    matchingLogs.forEach(({ log, food, contribution }) => {
      const row = document.createElement('article');
      row.className = 'target-detail-item';
      row.innerHTML = `
        <div>
          <h3>${food.name}</h3>
          <p class="muted">${formatEntryAmount(log, food)} | ${log.mealType}</p>
        </div>
        <strong>${formatNumber(round(contribution))} ${target.unit}</strong>
      `;
      targetDetailList.appendChild(row);
    });
  }

  targetDetailModal.classList.remove('hidden');
  targetDetailModal.setAttribute('aria-hidden', 'false');
}

function closeTargetModal() {
  state.currentTargetId = null;
  targetDetailModal.classList.add('hidden');
  targetDetailModal.setAttribute('aria-hidden', 'true');
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
    const qty = getSafeQty(log.qty || convertToServings(log.foodId, log.amount || 1, log.unit));
    DAILY_TARGETS.forEach((target) => {
      totals[target.id] += Number(food[target.id] || 0) * qty;
    });
  });
  return totals;
}

function defaultState() {
  return { logs: [], favorites: DEFAULT_FAVORITES, hiddenMeals: [], temporaryHiddenMeals: [], dislikedIngredients: [], customFoods: [] };
}

function loadState() {
  const raw = STORAGE_KEYS_TO_MIGRATE.map((key) => localStorage.getItem(key)).find(Boolean);
  if (!raw) {
    return defaultState();
  }
  try {
    const parsed = JSON.parse(raw);
    const logs = Array.isArray(parsed.logs) ? parsed.logs.map((log) => {
      const food = findFood(log.foodId);
      const unitConfig = getFoodUnitConfig(food);
      const amount = getSafeQty(log.amount || log.qty || unitConfig.baseAmount);
      const unit = log.unit || unitConfig.baseUnit;
      return { ...log, amount, unit, qty: convertToServings(log.foodId, amount, unit) };
    }) : [];
    return {
      logs,
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : DEFAULT_FAVORITES,
      hiddenMeals: Array.isArray(parsed.hiddenMeals) ? parsed.hiddenMeals : [],
      temporaryHiddenMeals: Array.isArray(parsed.temporaryHiddenMeals) ? parsed.temporaryHiddenMeals : [],
      dislikedIngredients: Array.isArray(parsed.dislikedIngredients) ? parsed.dislikedIngredients : [],
      customFoods: Array.isArray(parsed.customFoods) ? parsed.customFoods : []
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function getAllFoods() {
  return [...FOOD_LIBRARY, PRENATAL_FOOD, ...(state.data.customFoods || [])];
}

function findFood(id) {
  return getAllFoods().find((food) => food.id === id);
}

function getFoodUnitConfig(foodOrId) {
  const food = typeof foodOrId === 'string' ? findFood(foodOrId) : foodOrId;
  if (food?.unitConfig) return food.unitConfig;
  return FOOD_UNIT_CONFIGS[food?.id] || { baseAmount: 1, baseUnit: 'serving', units: ['serving'] };
}

function populateUnitSelect(food, selectedUnit) {
  const config = getFoodUnitConfig(food);
  modalUnitSelect.innerHTML = '';
  config.units.forEach((unit) => {
    const option = document.createElement('option');
    option.value = unit;
    option.textContent = unitLabel(unit, getFoodDisplayNoun(food, unit));
    modalUnitSelect.appendChild(option);
  });
  modalUnitSelect.value = config.units.includes(selectedUnit) ? selectedUnit : config.baseUnit;
}

function getFoodDisplayNoun(food, unit) {
  if (unit === 'egg') return 'egg';
  if (unit === 'slice') return 'slice';
  if (unit === 'item') {
    if (food?.name === 'Cheese stick') return 'stick';
    return 'item';
  }
  return unit;
}

function unitLabel(unit, noun = unit) {
  const labels = { cup: 'cup', oz: 'oz', tbsp: 'tbsp', tsp: 'tsp', slice: 'slice', egg: 'egg', item: noun, serving: 'serving' };
  return labels[unit] || unit;
}

function convertToServings(foodId, amount, unit) {
  const config = getFoodUnitConfig(foodId);
  const safeAmount = getSafeQty(amount);
  const normalizedAmount = convertUnitAmount(safeAmount, unit, config.baseUnit);
  return normalizedAmount / config.baseAmount;
}

function convertUnitAmount(amount, fromUnit, toUnit) {
  if (fromUnit === toUnit) return amount;
  const volumeOzMap = { cup: 8, oz: 1, tbsp: 0.5, tsp: 1/6 };
  if (fromUnit in volumeOzMap && toUnit in volumeOzMap) {
    return amount * volumeOzMap[fromUnit] / volumeOzMap[toUnit];
  }
  return amount;
}

function getSafeQty(value) {
  const num = Number(value);
  return Number.isFinite(num) && num > 0 ? num : 1;
}

function getSafeNonNegative(value) {
  const num = Number(value);
  return Number.isFinite(num) && num >= 0 ? num : 0;
}

function formatQtyLabel(qty, serving) {
  return qty === 1 ? serving : `${formatNumber(qty)} Ã ${serving}`;
}

function formatEntryAmount(log, food) {
  const amount = getSafeQty(log.amount || 1);
  const unit = log.unit || getFoodUnitConfig(food).baseUnit;
  const label = unitLabel(unit, getFoodDisplayNoun(food, unit));
  const plural = amount === 1 ? label : `${label}s`;
  return `${formatNumber(amount)} ${plural}`;
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
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
