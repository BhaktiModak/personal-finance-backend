const express = require('express');
const router = express.Router();
const {
  getTransactions,
  createTransaction,
  deleteTransaction
} = require('../controllers/transactionController'); // Correct path

// Each route should be connected to a function
router.get('/', getTransactions);
router.post('/', createTransaction);
router.delete('/:id',deleteTransaction)

module.exports = router;
