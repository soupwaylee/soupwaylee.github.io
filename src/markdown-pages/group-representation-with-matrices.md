---
path: "/writing/group-representation-with-matrices"
date: "2020-04-26"
title: "Group Representation With Matrices"
peek: "A quick peek into representation theory with some examples."
---

### Definition

A matrix $D(g)$ is said to be a representation for a group element $g$ iff. for any two group elements $g_1$, $g_2$ it holds 

$$ D(g_1) \cdot D(g_2) = D(g_1 \odot g_2), $$

where $\cdot$ denotes matrix multiplication and $\odot$ the composition of two group elements that has been defined on the group $(G, \odot)$.

### The Permutation Group

Let's do a brief refresher on the permutation group, specifically $S_5$ that permutes the five objects in $\{1, 2, ..., 5\}$. We can describe a group element of $S_5$ (a permutation) illustratively like

<!-- $$ 1 \shortrightarrow 4 $$ -->

$$ \begin{matrix} 1 \rightarrow 4 & 4 \rightarrow 2 \\ 2 \rightarrow 1 & 5 \rightarrow 3 \\ 3 \rightarrow 5 & \end{matrix} $$

or using Cauchy notation 

$$ \begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 4 & 1 & 5 & 2 & 3 \end{pmatrix} $$

and the more compact cycle notation

$$ (1 4 2) \odot (3 5)$$

because we apply two cyclic permutations $1 \rightarrow 4 \rightarrow 2 \rightarrow 1$ (a 3-cycle) and $3 \rightarrow 5 \rightarrow 3$ (a 2-cycle / swap / transposition). From the above example we see that we can express permutations as products of cycles of variable lengths. Further we can cyclicly push around the numbers in cycle notation without changing the permutation they represent, e.g. $(142) = (214) = (421)$. However, be mindful that this is not possible with the bottom line of the Cauchy notation!

*Cue on cycles: You can imagine an ordered row of numbered cards from one to five. When you start to move the cards in-place (meaning in the same row) to their new index and land at the position of the card you started with, you have found a cycle.*

This example nicely illustrates the group operation of the permutation group $(S_5, \odot)$ which we will call "multiplication" from now on (but note that it is in fact a function composition). As opposed to multiplication with scalars, permutation multiplication where the number of objects $n \geq 2$ is not commutative proven by the fact that the outcome of a permutation depends on the order in which the objects are swapped, i.e. $(12) \odot (13) \neq (13) \odot (12)$.

### Representing Permutations With Matrices

We will now use $S_4$ that permutes the following four objects

$$ \bold{v}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}, \bold{v}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \bold{v}_3 = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 1 \end{pmatrix}, \bold{v}_4 = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 1 \end{pmatrix}$$.

so let's look at the following group element $g$ in $S_4$ where $g=(\bold{v}_3\bold{v}_1\bold{v}_4\bold{v}_2)$. (Visual aid: $\bold{v}_3 \rightarrow \bold{v}_1, \bold{v}_1 \rightarrow \bold{v}_4, \bold{v}_4 \rightarrow \bold{v}_2, \bold{v}_2 \rightarrow \bold{v}_3$)

For the sake of brevity we went back to referring to the objects using their indices, so let $g=(3142)$ and in Cauchy notation

$$ \begin{pmatrix} 1 & 2 & 3 & 4\\ 4 & 3 & 1 & 2 \end{pmatrix} $$.

*Note: Here, we can see nicely that the bottom row of the Cauchy notation can not be used to construct the cycle notation.*

Now remembering back to the concept of permutation matrices in Linear Algebra, that swap out the columns of the matrices they are multiplied with, will help us understand the representation matrix in the next step.

So with the help of the indices of the bottom row of the Cauchy notation and using the respective unit vectors we obtain

$$ D(g) = D(3142) = \begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \end{pmatrix}$$.

When we now multiply $D(g)$ with the objects, i.e. $ D(g) \cdot \bold{v}_4 = \bold{v}_2 $ or $ D(g) \cdot \bold{v}_3 = \bold{v}_1 $, we see that the multiplication reflects the permutation action of $(3142)$ on $ \bold{v}_4 $ and $ \bold{v}_3 $ respectively.

Let's now try multiplying cycles using their matrix representations. Given

$$ D(24) = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \end{pmatrix}, $$

the following equality holds:

$$ D(3142) \cdot D(24) = \begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{pmatrix}.$$

And we can successfully cross-check by multiplying our permutations 

$$ (3142) \odot (24) = (3 1 4) $$

and based on that construct

$$ D(314) =  \begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{pmatrix}. $$

Note that we have not actually proven the group representation for $S_4$, but only verified it for this specific instance.

Interestingly, we can even express and represent simple addition $(\R, +)$ using matrix multiplication. We simply need to find a representation matrix $D(\cdot)$, such that $D(a) \cdot D(b) = D(a+b)$ where $a, b$ are scalars in $\R$. If we ponder about it for a second (or longer), we find that 

$$ D(a) =  \begin{pmatrix} 1 & 0 \\ a & 1 \end{pmatrix} $$

does the job, since

$$ D(a) \cdot D(b) = \begin{pmatrix} 1 & 0 \\ a+b & 1 \end{pmatrix} = D(a+b).$$

Lastly, one should always bear in mind the trivial representation that holds for all elements in a group with $D(g) = 1$ and we can see that it always fulfills the definition of a representation.

### Takeaways

1. Don't confuse the group element in the $S_n$ group with the actual objects that are being permuted.
2. The Cauchy notation has nothing to do with the cycle notation.
3. The operation in the $S_n$ group is not commutative. So is matrix multiplication.
4. From time to time researchers actually denote the matrix representation as the group elements. This caused the biggest confusion for me which led me to brushing up some fundamentals again. (And maybe that is their intention anyway)

---

*In a different universe this topic would have maybe been more intuitive for me. But it wasn't, which is why I ended up writing this post thanks to [Anthony Zee](https://en.wikipedia.org/wiki/Anthony_Zee) doing Group Theory in nutshells.*




