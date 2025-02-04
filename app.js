// 初始化配置
window.dayjs.locale('zh-cn');
// 修改 TOTAL_DAYS 的定义
const TOTAL_DAYS = parseInt(localStorage.getItem('TOTAL_DAYS')) || 20;
let startDate = localStorage.getItem('startDate') || dayjs().format('YYYY-MM-DD');

// 完整的20天C++学习计划
const initialPlan = {
    0: {
        title: "C++基础回顾与环境搭建",
        goals: [
            "熟悉C++开发环境",
            "复习C++基本语法",
            "理解命名空间概念"
        ],
        tasks: [
            "安装并配置C++开发环境",
            "编写第一个Hello World程序",
            "练习基本的输入输出操作"
        ],
        codeExample: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`
    },
    1: {
        title: "变量、数据类型与运算符",
        goals: [
            "掌握C++基本数据类型",
            "理解变量声明和初始化",
            "熟悉各类运算符的使用"
        ],
        tasks: [
            "练习不同数据类型的声明和使用",
            "完成基础的数学运算",
            "理解类型转换概念"
        ],
        codeExample: `int main() {
    int a = 10;
    double b = 3.14;
    char c = 'A';
    bool isTrue = true;
    
    double result = a + b;
    cout << result << endl;
    return 0;
}`
    },
    2: {
        title: "控制流程",
        goals: [
            "掌握if-else条件语句",
            "理解循环结构(for, while)",
            "学习switch语句使用"
        ],
        tasks: [
            "编写条件判断程序",
            "实现不同类型的循环",
            "使用switch实现菜单选择"
        ],
        codeExample: `int main() {
    int choice;
    cin >> choice;
    
    switch(choice) {
        case 1: cout << "选项一"; break;
        case 2: cout << "选项二"; break;
        default: cout << "其他选项";
    }
    return 0;
}`
    },
    3: {
        title: "函数基础",
        goals: [
            "理解函数声明和定义",
            "掌握参数传递方式",
            "学习函数重载"
        ],
        tasks: [
            "创建并调用自定义函数",
            "练习不同参数类型的函数",
            "实现函数重载示例"
        ],
        codeExample: `int add(int a, int b) {
    return a + b;
}
double add(double a, double b) {
    return a + b;
}`
    },
    4: {
        title: "数组与字符串",
        goals: [
            "掌握数组的定义和使用",
            "学习字符串处理",
            "理解数组作为函数参数"
        ],
        tasks: [
            "创建和操作数组",
            "实现字符串处理函数",
            "完成数组排序算法"
        ],
        codeExample: `void sortArray(int arr[], int size) {
    for(int i = 0; i < size-1; i++) {
        for(int j = 0; j < size-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`
    },
    5: {
        title: "指针基础",
        goals: [
            "理解指针概念",
            "掌握指针操作",
            "学习动态内存分配"
        ],
        tasks: [
            "练习指针声明和使用",
            "实现指针参数传递",
            "使用new和delete"
        ],
        codeExample: `int* createArray(int size) {
    int* arr = new int[size];
    return arr;
}`
    },
    6: {
        title: "引用与高级指针",
        goals: [
            "理解引用概念",
            "掌握引用vs指针",
            "学习指针进阶用法"
        ],
        tasks: [
            "练习引用参数传递",
            "实现函数返回引用",
            "使用指针数组"
        ],
        codeExample: `void swapNumbers(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}`
    },
    7: {
        title: "结构体和枚举",
        goals: [
            "掌握结构体定义",
            "理解结构体数组",
            "学习枚举类型"
        ],
        tasks: [
            "创建和使用结构体",
            "实现结构体数组操作",
            "应用枚举类型"
        ],
        codeExample: `struct Student {
    string name;
    int age;
    double score;
};`
    },
    8: {
        title: "类与对象基础",
        goals: [
            "理解类的概念",
            "掌握对象创建",
            "学习成员函数"
        ],
        tasks: [
            "定义简单类",
            "创建对象实例",
            "实现成员函数"
        ],
        codeExample: `class Rectangle {
private:
    int width, height;
public:
    void setValues(int w, int h) {
        width = w;
        height = h;
    }
};`
    },
    9: {
        title: "构造函数与析构函数",
        goals: [
            "理解构造函数作用",
            "掌握析构函数用途",
            "学习初始化列表"
        ],
        tasks: [
            "实现默认构造函数",
            "创建带参数构造函数",
            "使用析构函数"
        ],
        codeExample: `class MyClass {
public:
    MyClass() { // 构造函数
        cout << "Created" << endl;
    }
    ~MyClass() { // 析构函数
        cout << "Destroyed" << endl;
    }
};`
    },
    10: {
        title: "封装与访问控制",
        goals: [
            "理解封装原理",
            "掌握访问修饰符",
            "学习getter/setter"
        ],
        tasks: [
            "实现私有成员保护",
            "创建访问接口",
            "使用友元函数"
        ],
        codeExample: `class BankAccount {
private:
    double balance;
public:
    void deposit(double amount) {
        if(amount > 0) {
            balance += amount;
        }
    }
};`
    },
    11: {
        title: "继承基础",
        goals: [
            "理解继承概念",
            "掌握继承类型",
            "学习protected关键字"
        ],
        tasks: [
            "创建基类和派生类",
            "实现继承关系",
            "使用protected成员"
        ],
        codeExample: `class Animal {
protected:
    string name;
public:
    void setName(string n) {
        name = n;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << name << " barks" << endl;
    }
};`
    },
    12: {
        title: "多态性",
        goals: [
            "理解多态概念",
            "掌握虚函数",
            "学习抽象类"
        ],
        tasks: [
            "实现函数重写",
            "使用虚函数",
            "创建抽象类"
        ],
        codeExample: `class Shape {
public:
    virtual double area() = 0;
};

class Circle : public Shape {
    double radius;
public:
    double area() override {
        return 3.14 * radius * radius;
    }
};`
    },
    13: {
        title: "模板基础",
        goals: [
            "理解模板概念",
            "掌握函数模板",
            "学习类模板"
        ],
        tasks: [
            "创建函数模板",
            "实现类模板",
            "使用模板特化"
        ],
        codeExample: `template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}`
    },
    14: {
        title: "STL容器",
        goals: [
            "理解STL基础",
            "掌握vector使用",
            "学习迭代器"
        ],
        tasks: [
            "使用vector容器",
            "实现迭代器操作",
            "练习常用算法"
        ],
        codeExample: `vector<int> numbers;
numbers.push_back(1);
numbers.push_back(2);
for(auto it = numbers.begin(); it != numbers.end(); ++it) {
    cout << *it << endl;
}`
    },
    15: {
        title: "异常处理",
        goals: [
            "理解异常机制",
            "掌握try-catch",
            "学习异常类"
        ],
        tasks: [
            "实现异常处理",
            "创建自定义异常",
            "使用多重捕获"
        ],
        codeExample: `try {
    if(denominator == 0) {
        throw "Division by zero!";
    }
    result = numerator / denominator;
} catch(const char* msg) {
    cerr << msg << endl;
}`
    },
    16: {
        title: "文件操作",
        goals: [
            "理解文件流",
            "掌握文件读写",
            "学习文件操作模式"
        ],
        tasks: [
            "实现文件读取",
            "创建文件写入",
            "使用二进制文件"
        ],
        codeExample: `ofstream outFile("test.txt");
outFile << "Hello, File!" << endl;
outFile.close();`
    },
    17: {
        title: "智能指针",
        goals: [
            "理解智能指针概念",
            "掌握unique_ptr",
            "学习shared_ptr"
        ],
        tasks: [
            "使用unique_ptr",
            "实现shared_ptr",
            "理解weak_ptr"
        ],
        codeExample: `unique_ptr<int> ptr(new int(10));
cout << *ptr << endl;
// 自动释放内存`
    },
    18: {
        title: "C++11新特性",
        goals: [
            "理解auto关键字",
            "掌握lambda表达式",
            "学习右值引用"
        ],
        tasks: [
            "使用auto推导",
            "创建lambda函数",
            "实现移动语义"
        ],
        codeExample: `auto lambda = [](int x, int y) {
    return x + y;
};
cout << lambda(3, 4) << endl;`
    },
    19: {
        title: "项目实战",
        goals: [
            "整合所学知识",
            "实现完整项目",
            "优化代码结构"
        ],
        tasks: [
            "设计项目架构",
            "编写核心功能",
            "测试和调试"
        ],
        codeExample: `// 综合运用所学知识
// 实现一个简单的管理系统或游戏
// 这里可以是项目的核心代码片段`
    }
};

// 获取学习计划
const learningPlan = JSON.parse(localStorage.getItem('learningPlan')) || {};


// 将学习计划保存到localStorage
localStorage.setItem('learningPlan', JSON.stringify(initialPlan));
// 打开编辑计划模态框
// 打开编辑计划模态框
window.openEditPlan = function() {
    const modal = document.getElementById('editPlanModal');
    const overlay = document.getElementById('modalOverlay');
    const daySelector = document.getElementById('daySelector');
    const totalDaysInput = document.getElementById('totalDays');
    
    // 更新总天数输入框
    totalDaysInput.value = TOTAL_DAYS;
    
    // 生成天数选择器的选项
    daySelector.innerHTML = '';
    for (let i = 0; i < TOTAL_DAYS; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `第${i + 1}天`;
        daySelector.appendChild(option);
    }
    
    // 加载第一天的内容
    loadDayContent(0);
    
    // 显示模态框
    modal.style.display = 'block';
    overlay.style.display = 'block';
    // 添加open类触发动画
    setTimeout(() => {
        modal.classList.add('open');
        overlay.classList.add('open');
    }, 10);
}

// 加载某一天的内容
function loadDayContent(dayIndex) {
    const plan = initialPlan[dayIndex] || {
        title: '',
        goals: [],
        tasks: [],
        codeExample: ''
    };
    
    document.getElementById('dayTitle').value = plan.title;
    document.getElementById('codeExample').value = plan.codeExample;
    
    // 加载目标列表
    const goalsList = document.getElementById('goalsList');
    goalsList.innerHTML = '';
    plan.goals.forEach((goal, index) => {
        addListItem('goal', goal, index);
    });
    
    // 加载任务列表
    const tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = '';
    plan.tasks.forEach((task, index) => {
        addListItem('task', task, index);
    });
}

// 添加列表项
function addListItem(type, value = '', index = -1) {
    const container = document.getElementById(`${type}sList`);
    const div = document.createElement('div');
    div.className = 'item-row';
    div.innerHTML = `
        <input type="text" value="${value}" class="${type}-input">
        <button onclick="removeListItem(this)" class="remove-btn">删除</button>
    `;
    container.appendChild(div);
}

// 删除列表项
window.removeListItem = function(button) {
    button.parentElement.remove();
}

// 添加目标
window.addGoal = function() {
    addListItem('goal');
}

// 添加任务
window.addTask = function() {
    addListItem('task');
}

// 保存当天计划
window.saveDayPlan = function() {
    const dayIndex = parseInt(document.getElementById('daySelector').value);
    const newPlan = {
        title: document.getElementById('dayTitle').value,
        goals: Array.from(document.getElementsByClassName('goal-input')).map(input => input.value),
        tasks: Array.from(document.getElementsByClassName('task-input')).map(input => input.value),
        codeExample: document.getElementById('codeExample').value
    };
    
    // 更新计划
    initialPlan[dayIndex] = newPlan;
    localStorage.setItem('learningPlan', JSON.stringify(initialPlan));
    
    // 显示保存成功提示
    alert('保存成功！');
}

// 关闭编辑计划模态框
// 关闭编辑计划模态框
window.closeEditPlanModal = function() {
    const modal = document.getElementById('editPlanModal');
    const overlay = document.getElementById('modalOverlay');
    
    // 移除open类触发关闭动画
    modal.classList.remove('open');
    overlay.classList.remove('open');
    
    // 等待动画完成后隐藏模态框
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
}

// 监听天数选择器变化
document.getElementById('daySelector')?.addEventListener('change', function(e) {
    loadDayContent(parseInt(e.target.value));
});

// 监听总天数变化
document.getElementById('totalDays')?.addEventListener('change', function(e) {
    const newTotalDays = parseInt(e.target.value);
    if (newTotalDays > 0 && newTotalDays <= 100) {
        TOTAL_DAYS = newTotalDays;
        localStorage.setItem('TOTAL_DAYS', newTotalDays);
        
        // 更新天数选择器
        const daySelector = document.getElementById('daySelector');
        daySelector.innerHTML = '';
        for (let i = 0; i < TOTAL_DAYS; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `第${i + 1}天`;
            daySelector.appendChild(option);
        }
        
        // 重新生成日历
        generateCalendar();
    } else {
        alert('请输入1-100之间的天数');
        e.target.value = TOTAL_DAYS;
    }
});
const storage = {
    get completedDays() {
        return JSON.parse(localStorage.getItem('completedDays') || '[]');
    },
    get notes() {
        return JSON.parse(localStorage.getItem('notes') || '{}');
    },
    get tasks() {
        return JSON.parse(localStorage.getItem('tasks') || '{}');
    }
};

// 生成日历
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    for (let i = 0; i < TOTAL_DAYS; i++) {
        const date = dayjs(startDate).add(i, 'day');
        const card = document.createElement('div');
        card.className = `day-card${storage.completedDays.includes(i) ? ' active' : ''}`;
        card.innerHTML = `
            <div>第${i + 1}天</div>
            <div>${date.format('MM-DD')}</div>
        `;
        card.onclick = () => showDayDetails(i);
        calendar.appendChild(card);
    }
}

// 更新进度
function updateProgress() {
    const completed = storage.completedDays.length;
    const percentage = (completed / TOTAL_DAYS) * 100;
    document.querySelector('.progress-fill').style.width = `${percentage}%`;
    
    const endDate = dayjs(startDate).add(TOTAL_DAYS, 'day');
    const remaining = endDate.diff(dayjs(), 'day');
    document.getElementById('countdown').textContent = 
        `距离结束还有 ${remaining} 天`;
}

// 打卡功能
window.toggleToday = function() {
    const todayIndex = getTodayIndex();
    if (todayIndex >= 0 && todayIndex < TOTAL_DAYS) {
        const completed = storage.completedDays;
        const index = completed.indexOf(todayIndex);
        
        if (index === -1) {
            completed.push(todayIndex);
            
            // 左下角发射
            confetti({
                particleCount: 120,        // 更多的粒子
                angle: 60,                // 向右上方60度角发射
                spread: 50,               // 更集中的射流
                origin: { x: 0, y: 0.9 }, // 更接近左下角
                startVelocity: 100,       // 更大的初始速度
                gravity: 0.8,             // 较小的重力影响
                ticks: 300,               // 粒子存在的时间
                scalar: 1.2,              // 粒子大小
                colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']
            });

            // 右下角发射
            confetti({
                particleCount: 120,        // 更多的粒子
                angle: 120,               // 向左上方120度角发射
                spread: 50,               // 更集中的射流
                origin: { x: 1, y: 0.9 }, // 更接近右下角
                startVelocity: 100,       // 更大的初始速度
                gravity: 0.8,             // 较小的重力影响
                ticks: 300,               // 粒子存在的时间
                scalar: 1.2,              // 粒子大小
                colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']
            });
        } else {
            completed.splice(index, 1);
        }
        
        localStorage.setItem('completedDays', JSON.stringify(completed));
        generateCalendar();
        updateProgress();
        checkAchievements();
    }
}

// 保存笔记
window.saveNote = function() {
    const todayIndex = getTodayIndex();
    const note = document.getElementById('dailyNote').value.trim();
    if (note) {
        const notes = storage.notes;
        notes[todayIndex] = note;
        localStorage.setItem('notes', JSON.stringify(notes));
        showAchievement('noteAdded');
    }
}

// 显示日期详情
window.showDayDetails = function(dayIndex) {
    const day = initialPlan[dayIndex];
    const modal = document.getElementById('taskModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');

    const noteContent = storage.notes[dayIndex] || '';  // 获取已存在的笔记内容

    // 如果这一天的内容还未定义，显示默认内容
    if (!day) {
        title.textContent = `第${dayIndex + 1}天`;
        content.innerHTML = `
            <h3>敬请期待</h3>
            <p>这一天的学习内容正在规划中...</p>
            <h3>学习笔记</h3>
            <textarea id="modalNote" class="modal-note" placeholder="记录你的学习笔记...">${noteContent}</textarea>
            <div class="modal-buttons">
                <button onclick="saveModalNote(${dayIndex})" class="save-note-btn">保存笔记</button>
                <button onclick="closeModal()" class="close-btn">关闭</button>
            </div>
        `;
    } else {
        title.textContent = `第${dayIndex + 1}天 - ${day.title}`;
        content.innerHTML = `
            <h3>学习目标</h3>
            <ul>${day.goals.map(goal => `<li>${goal}</li>`).join('')}</ul>
            
            <h3>今日任务</h3>
            <ul>${day.tasks.map(task => `<li>${task}</li>`).join('')}</ul>
            
            <h3>示例代码</h3>
            <pre><code>${day.codeExample}</code></pre>

            <h3>学习笔记</h3>
            <textarea id="modalNote" class="modal-note" placeholder="记录你的学习笔记...">${noteContent}</textarea>
            <div class="modal-buttons">
                <button onclick="saveModalNote(${dayIndex})" class="save-note-btn">保存笔记</button>
                <button onclick="closeModal()" class="close-btn">关闭</button>
            </div>
        `;
    }

    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// 添加保存模态框笔记的函数
window.saveModalNote = function(dayIndex) {
    const noteContent = document.getElementById('modalNote').value.trim();
    const notes = storage.notes;
    notes[dayIndex] = noteContent;
    localStorage.setItem('notes', JSON.stringify(notes));
    showAchievement('noteAdded');
    alert('笔记已保存！');
}

// 关闭模态框
window.closeModal = function() {
    document.getElementById('taskModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

// 显示成就
function showAchievement(type) {
    const achievement = {
        noteAdded: { name: '笔记达人', desc: '首次添加学习笔记' },
        codeComplete: { name: '代码专家', desc: '完成所有代码任务' },
        firstComplete: { name: '初试锋芒', desc: '完成首个学习日' },
        week1Complete: { name: '渐入佳境', desc: '完成第一周学习' },
        perfectWeek: { name: '全勤标兵', desc: '连续7天打卡' }
    }[type];
    
    if (achievement) {
        const toast = document.createElement('div');
        toast.className = 'badge';
        toast.textContent = `🎉 获得成就：${achievement.name}`;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.remove(), 3000);
    }
}

// 检查成就
function checkAchievements() {
    const completed = storage.completedDays.length;
    if (completed >= 1) showAchievement('firstComplete');
    if (completed >= 7) showAchievement('week1Complete');
    if (checkConsecutive(7)) showAchievement('perfectWeek');
}

// 检查连续完成
function checkConsecutive(days) {
    const completed = storage.completedDays.sort((a, b) => a - b);
    let streak = 1;
    for (let i = 1; i < completed.length; i++) {
        if (completed[i] === completed[i-1] + 1) streak++;
        else streak = 1;
        if (streak >= days) return true;
    }
    return false;
}

// 获取今天的索引
function getTodayIndex() {
    return dayjs().diff(startDate, 'day');
}

// DOM加载完成后绑定事件
document.addEventListener('DOMContentLoaded', function() {
    // 点击遮罩层关闭模态框
    const overlay = document.getElementById('modalOverlay');
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeEditPlanModal();
        }
    });

    // 添加ESC键关闭功能
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeEditPlanModal();
        }
    });
    
    // 保留其他初始化代码
    if (!localStorage.getItem('learningPlan')) {
        localStorage.setItem('learningPlan', JSON.stringify(initialPlan));
    }
    
    localStorage.setItem('startDate', startDate);
    generateCalendar();
    updateProgress();
    setInterval(updateProgress, 60000);
});
// 打开补签模态框
window.openMakeUpSign = function() {
    const today = dayjs();
    const startDay = dayjs(startDate);
    const todayIndex = getTodayIndex();
    
    // 如果今天已经打卡，不允许补签
    if (storage.completedDays.includes(todayIndex)) {
        alert('今日已打卡，无需补签！');
        return;
    }

    document.getElementById('makeUpModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
    
    // 设置日期选择器的范围
    const makeUpDateInput = document.getElementById('makeUpDate');
    makeUpDateInput.min = startDate;
    makeUpDateInput.max = today.format('YYYY-MM-DD');
    makeUpDateInput.value = today.format('YYYY-MM-DD');
}

// 关闭补签模态框
window.closeMakeUpModal = function() {
    document.getElementById('makeUpModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

// 提交补签
window.submitMakeUp = function() {
    const makeUpDate = dayjs(document.getElementById('makeUpDate').value);
    const makeUpNote = document.getElementById('makeUpNote').value.trim();
    const startDay = dayjs(startDate);
    
    // 计算补签日期对应的索引
    const makeUpIndex = makeUpDate.diff(startDay, 'day');
    
    // 验证补签日期的有效性
    if (makeUpIndex < 0 || makeUpIndex >= TOTAL_DAYS) {
        alert('补签日期超出计划范围！');
        return;
    }
    
    // 验证是否已经打卡
    if (storage.completedDays.includes(makeUpIndex)) {
        alert('该日期已打卡，无需补签！');
        return;
    }
    
    // 执行补签
    const completed = storage.completedDays;
    completed.push(makeUpIndex);
    localStorage.setItem('completedDays', JSON.stringify(completed));
    
    // 如果有补签备注，保存到笔记
    if (makeUpNote) {
        const notes = storage.notes;
        notes[makeUpIndex] = `[补签] ${makeUpNote}`;
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    
    // 更新界面
    generateCalendar();
    updateProgress();
    checkAchievements();
    
    // 关闭模态框
    closeMakeUpModal();
    
    // 显示成功提示
    alert('补签成功！');
}
