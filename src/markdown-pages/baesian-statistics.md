---
path: "/writing/a-corny-introduction-into-bae-sian-statistics"
date: "2020-01-09"
title: "A Corny Introduction into Bae-sian Statistics"
---

Most Machine Learning theory books start out with an introduction into probability theory, specifically Bayesian statistics. A key concept in this field is Bayes' law and its subsequent application in most of the common ML concepts within Supervised (e.g. Linear Regression / Classification) and Unsupervised Learning (e.g. Clustering) or even Principle Component Analysis. Since examples using coin tosses or balls and urns are boring, I adapted a corny story to explain how someone might use the Bayes' law in their daily life. It's rounded off with an outlook into why and how (WIP tbh) this topic would be important in the ML context.

You're going to the movies and want to share a medium popcorn with bae. By the time you get to the front of the popcorn queue you start a messy discussion about the flavor to the point that the cashier becomes increasingly irritated and ends up violently shoving two scoops into the bag without consulting you any further. Unfortunately, during your intense discourse, you missed out on which buckets the cashier took the popcorn from, but from the corner of your eye you saw that *at least one of the scoops was (to your dismay) salty*. You could settle with a mix of sweet and salty, but a salty-only bag is a no-go. As you exit the popcorn queue, you think that the cashier might still remember what he gave out, but ultimately you choose not to go back and ask. Instead, you take a few breaths and decide to conduct a test with your partner, because that would be much faster and you're very anxious to know this piece of information so that in the worst case you can go back into line and buy another bag of sweet popcorn for yourself (ugh!).

While standing in the queue for admission, you pull out an unused piece of tissue and jot down the following mutually exclusive and exhaustive *hypotheses* *H* with *W* for s**W**eet and *A* for s**A**lty based on what you saw.

- *AA* (the cashier put two scoops of salty popcorn)
- *AW* (the cashier put a scoop of salty and a scoop of sweet popcorn)

Initially, you are equally uncertain about both assumptions and therefore you assign them uniformly distributed *prior probabilities* of 0.5.

Since your partner is very brave, they decide to go ahead and initiate the experiment. Your partner shuffles the whole bag and randomly takes out *a handful of popcorn, which equals a scoop because they have very large hands*, and stuffs it inside their mouth (all at once). Without swallowing, they declare that they taste *salty only* and a piece of popcorn flies out of their mouth and onto your new jacket. Because you've been dating for quite a while now and you've become super comfortable with each other, you decide to let it go just this time and take note of the *data* *D* (and the piece of salty popcorn on your jacket) that you just obtained.

* *D*: There was definitely one scoop of salty popcorn in the bag.

Somehow you even manage draw a little table, though it's quite jiggly.

| *H* | Prior | Likelihood | Prior x Likelihood | Posterior |
| --- | ---: | ---: | ---: | ---: |
| *AA* | 0.5 |  |  |  |
| *AW* | 0.5 |  |  |  |

You then proceed to fill out the *likelihood* column by asking yourself: "What is the probability of obtaining the data *D* we observed assuming that the hypothesis *H* is true?" To your convenience, you assume that with a random hand(scoop)ful of popcorn *you can either retrieve sweet-only or salty-only, but never a mix of both*.

Assuming that there were two scoops of salty (*AA*) in the bag, the likelihood of your partner being able to retrieve a handful of salty is 100%. But what of it were to be a mixed bag of popcorn (*AW*)? Chances of retrieving a salty handful and a sweet handful are the same, so the probability of obtaining our actual *D* are 50%. In your mind you construct the following table based on all possible outcomes.


| *H* | Possible *D* | Probability |
| --- | --- | ---: |
| *AA* | A handful of salty | 1 |
| *AA* | A handful of sweet | 0 |
| *AW* | A handful of salty | 0.5 |
| *AW* | A handful of sweet | 0.5 |

<!-- <table>
    <thead>
        <tr>
            <th><i>H</i></th>
            <th>Possible <i>D</i></th>
            <th>Probability (likelihood)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=2><i>AA</i></td>
            <td>A handful of salty</td>
            <td align='right'>1</td>
        </tr>
        <tr>
            <td>A handful of sweet</td>
            <td align='right'>0</td>
        </tr>
        <tr>
            <td rowspan=2><i>AW</i></td>
            <td>A handful of salty</td>
            <td align='right'>0.5</td>
        </tr>
        <tr>
            <td>A handful of sweet</td>
            <td align='right'>0.5</td>
        </tr>
    </tbody>
</table> -->

However, since you only have limited space on your tissue, you fill in the likelihood values only based on your partner's observation *D* - the cashier put one scoop of salty popcorn inside the bag.

| *H* | Prior | Likelihood | Prior x Likelihood | Posterior |
| --- | ---: | ---: | ---: | ---: |
| *AA* | 0.5 | 1 |  |  |
| *AW* | 0.5 | 0.5 |  |  |

You then proceed to do some quick maths and fill out the fourth column for the *unnormalized posterior* (notice that it does not sum up to one).

Since you unlearned all your mental arithmetics throughout your innumerous years of college education, you pull out your phone for the last column to determine the (normalized) *posterior* probabilities by dividing each value of the fourth column by its sum.

| *H* | Prior | Likelihood | Prior x Likelihood | Posterior |
| --- | ---: | ---: | ---: | ---: |
| *AA* | 0.5 | 1 | 0.5 | 0.667 |
| *AW* | 0.5 | 0.5 | 0.25 | 0.333 |

You curse under your breath as you inspect the table more closely and your partner chuckles as they peek over your shoulder onto your piece of tissue (seeing that you unnecessarily computed the normalized posterior). 

Ultimately, based on your observed *D*, the last two columns reflect that it's around twice as likely that the popcorn bag contained salty popcorn only. You're doomed.

As you stroll back to the popcorn line, you briefly recap what just happened. In essence, you applied *Bayes' law* twice for each *H* in order to determine your posterior probability

$$p(H\mid D)=\frac{p(D\mid H)p(H)}{p(D)}$$

using the following

| Term | Math | Natural Language |
| ---  | ---  | --- |
| Prior | $$p(H)$$ | uncertainty of your assumption prior to observing any *D* |
| Likelihood | $$p(D \mid H)$$ | probability of observing *D* assuming *H* holds |
| Evidence (marginal probability) | $$p(D)$$ | probability of observed *D* (regardless of *H*) |
| Posterior | $$p(H \mid D)$$ | confidence in our *H* given our observed *D*. |

Notes: The prior is a *marginal probability* as well. A marginal probability describes the probability of an event occurring without taking any other conditions into account. The Bayes' law can be easily derived using the [Multiplication rule](https://www.khanacademy.org/math/ap-statistics/probability-ap/probability-multiplication-rule/a/general-multiplication-rule). Applying the Bayes' law is called a *Bayesian analysis* or *Bayesian inference* (some might also call it *Probabilistic inference*). We update our beliefs as we are observing and learning more. Lastly, looking at Bayes' law again, the following relation becomes evident

$$p(H\mid D) \propto p(D\mid H) \cdot p(H).$$

Initially you were quite uncertain about the contents of the popcorn bag, since based on what you saw from the corner of your eye, both of your assumptions on the flavor were equally likely, i.e. $$p(AA) = p(AW) = 0.5$$. This turns out to be pretty useless for your decision on whether you'd have to go back to be able to have sweet popcorn. However, after obtaining some data *D* by letting your partner test and determining the likelihoods $$p(D \mid AA)$$ and $$p(D \mid AW)$$, we can conclude that $$p(AA \mid D) \approx 2 \cdot p(AW \mid D)$$. If you felt like gambling, you could've taken you chances with this, but you decided to play it safe and have your own sweet bag of popcorn at the cost of spending money on another bag (and not having to share half of the rest with your partner, ha!). 

In a nutshell, Machine Learning is the process of trying to find out ways to describe phenomena with an inherent sense of uncertainty using data that that might or might not be available to us. These uncertainties can be modeled using probability distributions - either over a discrete or continuous event space. Distributions are characterized by their parameters (usually aggregated in $$\theta$$ or $$\vec{\theta}$$), such as $$Uniform(\theta)$$, $$Bin(n, p)$$ or $$\mathcal{N}(\mu, \sigma^2)$$. These parameters in turn need to be estimated in the first place. A hypothesis *H* therefore corresponds to the assumption that $$\theta$$ has a certain value. The priors are therefore described with $$p(\theta)$$. We pick the priors based on how informed we are. Naturally this will then affect how we get to our conclusion. Sometimes the data *D* will be replaced with an *x* and the Bayes' law will then look like this

$$p(\theta\mid x)=\frac{p(x\mid \theta)p(\theta)}{p(x)}.$$

--- 

*Brendon J. Brewer's lecture notes from [STATS 331](https://www.stat.auckland.ac.nz/~brewer/stats331.pdf) proved to be super helpful on my way to grasping the topic of Bayesian inference and I somehow felt inspired to build a story based his first example after I went to see [Knives Out](https://www.imdb.com/title/tt8946378/) yesterday. (Photo by [Charles](https://unsplash.com/@charlesdeluvio) on [Unsplash](https://unsplash.com/))*