import TeacherNode from './core/node/teacher.node.js';

// 启动教师节点
TeacherNode.startNode().catch(error => {
    console.error('Failed to start node:', error);
    if (error.message === 'Login failed') {
        console.log('Please try to restart the application.');
    }
    process.exit(1);
});

export default TeacherNode;

