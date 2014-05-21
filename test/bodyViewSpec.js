require('./loader');

var moment = require('moment'),
    expect = require('chai').expect,
    bodyView = require('bodyView');

describe('Body View', function () {

    it('Should create all the days for the 2014-May', function () {

        var thisMoment = moment().year(2014).month(4).date(1);

        var markup = bodyView(thisMoment).markup;  // month is May - zero indexed

        expect(markup).to.equal('<tbody>' +
                '<tr>' +
                '<td>27</td><td>28</td><td>29</td><td>30</td><td>1</td><td>2</td><td>3</td>' +
                '</tr>' +
                '<tr>' +
                '<td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>' +
                '</tr>' +
                '<tr>' +
                '<td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>' +
                '</tr>' +
                '<tr>' +
                '<td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td>' +
                '</tr>' +
                '<tr>' +
                '<td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td>' +
                '</tr>' +
                '<tr>' +
                '<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>' +
                '</tr>' +
                '</tbody>'
        );
    });

    it('Should create all the days for the 2014-Jun', function () {

        var thisMoment = moment().year(2014).month(5).date(1);

        var markup = bodyView(thisMoment).markup;  // month is Jun - zero indexed

        expect(markup).to.equal('<tbody>' +
                '<tr>' +
                '<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>' +
                '</tr>' +
                '<tr>' +
                '<td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>' +
                '</tr>' +
                '<tr>' +
                '<td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td>' +
                '</tr>' +
                '<tr>' +
                '<td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>' +
                '</tr>' +
                '<tr>' +
                '<td>29</td><td>30</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>' +
                '</tr>' +
                '<tr>' +
                '<td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>' +
                '</tr>' +
                '</tbody>'
        );
    });

});