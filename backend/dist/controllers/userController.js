"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.getUserById = exports.deleteUser = exports.getUsers = exports.updateUserProfile = exports.registerUser = exports.getUserProfile = exports.authUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const generateToken_1 = require("../utils/generateToken");
const authUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield userModel_1.default.findOne({ email });
    if (user && (yield user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken_1.generateToken(user._id)
        });
    }
    else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
}));
exports.authUser = authUser;
const getUserProfile = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken_1.generateToken(user._id)
        });
    }
    else {
        res.status(404);
        throw new Error('USER not found');
    }
}));
exports.getUserProfile = getUserProfile;
const updateUserProfile = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = yield user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken_1.generateToken(updatedUser._id)
        });
    }
    else {
        res.status(404);
        throw new Error('USER not found');
    }
}));
exports.updateUserProfile = updateUserProfile;
const registerUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const userExists = yield userModel_1.default.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = yield userModel_1.default.create({
        name,
        email,
        password,
        isAdmin: false
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken_1.generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error('User not Found');
    }
}));
exports.registerUser = registerUser;
const getUsers = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.find({});
    if (users) {
        res.json(users);
    }
    else {
        res.status(400);
        throw new Error('User not Found');
    }
}));
exports.getUsers = getUsers;
const getUserById = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.params.id).select('-password');
    if (user) {
        res.json(user);
    }
    else {
        res.status(400);
        throw new Error('User not Found');
    }
}));
exports.getUserById = getUserById;
const deleteUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.params.id);
    if (user) {
        yield (user === null || user === void 0 ? void 0 : user.remove());
        res.json({ message: 'User removed' });
    }
    else {
        res.status(404);
        throw new Error('User not Found');
    }
}));
exports.deleteUser = deleteUser;
const updateUserById = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.params.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin;
        const updatedUser = yield user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        });
    }
    else {
        res.status(404);
        throw new Error('USER not found');
    }
}));
exports.updateUserById = updateUserById;
//# sourceMappingURL=userController.js.map